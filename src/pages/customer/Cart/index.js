import React, { useEffect, useRef, useState } from 'react';
import images from '~/assets/images';
import style from './style.module.scss';
import { useNavigate, useOutletContext } from 'react-router-dom';
import CartItem from '~/components/contents/CartItem';
import useLocalStorage from '~/hooks/useLocalStorage';
import useAuth from '~/hooks/useAuth';
import { addOrder } from '~/webService';
import RequireLogin from '~/components/infoModals/RequireLogin';
import Alert from '~/components/infoModals/Alert';
import { formatMoney } from '~/ultis/index';
const Cart = () => {
    const auth = useAuth();
    const totalRef = useRef(0);
    const { cartIMG } = images;
    const [loading, setLoading] = useState(true);
    const [{ products }, setCart] = useOutletContext();
    const [itemsInCart, setItemsInCart] = useLocalStorage('cart', []);
    const { userInfo } = auth;
    const [loginWarning, setLoginWarning] = useState(false);
    const navigate = useNavigate();
    const [alert, setAlert] = useState({
        show: false,
        type: '',
        message: '',
    });

    useEffect(() => {
        if (products) setLoading(false);
    }, [products]);
    if (loading) return <h1>Loading ...</h1>;
    const cartItems = itemsInCart?.map((item) => {
        const foundProduct = products?.find((product) => product.id.toString() === item.id);
        const size = foundProduct?.ChiTiet.find(
            (instock) => instock.id.toString() === item.id_chitiet,
        );
        // console.log('size', size);
        // console.log('found', foundProduct);

        return {
            TenSP: foundProduct?.TenSP,
            GiaKM: foundProduct?.DonGia - (foundProduct?.DonGia * foundProduct?.KhuyenMai) / 100,
            GiaGoc: foundProduct?.DonGia,
            TenAnh: foundProduct?.TenAnh,
            SoLuong: item?.SoLuong,
            id_chitiet: item?.id_chitiet,
            Size: size?.Size,
        };
    });
    const totalPrice = cartItems.reduce((result, current) => {
        return result + current.GiaKM * current.SoLuong;
    }, 0);
    const createOrder = async () => {
        if (!auth.isLogin) {
            setLoginWarning(true);
            return;
        }
        const data = {
            id_nguoidung: userInfo.id_nguoidung,
            products: [...itemsInCart],
        };
        const res = await addOrder(data);
        const reponse = await res.json();
        setItemsInCart([]);
        setAlert({
            show: true,
            type: 'sucess',
            message: 'Thanh toán thành công',
        });
    };
    return (
        <div className={style.wrapperCart}>
            {loginWarning && <RequireLogin setShow={setLoginWarning} />}
            {alert.show && <Alert alert={alert} setAlert={setAlert} />}
            {itemsInCart?.length === 0 && (
                <div className={style.wrapperNoPruduct}>
                    <div className={style.imgNoProduct}>
                        <img src={cartIMG} alt="no product" />
                    </div>
                    <p>Giỏ hàng của bạn còn trống</p>
                    <button
                        onClick={() => {
                            navigate('/products');
                        }}
                    >
                        Tiếp tục mua sắm
                    </button>
                </div>
            )}
            {itemsInCart.length > 0 && (
                <div className={style.haveProduct}>
                    {cartItems?.map((item, index) => {
                        return (
                            <CartItem
                                setCart={setCart}
                                key={index}
                                data={item}
                                setItemsInCart={setItemsInCart}
                                itemsInCart={itemsInCart}
                            />
                        );
                    })}
                    <div className={style.btnPay}>
                        <span>Tổng thanh toán ({cartItems.length} sản phẩm ): </span>
                        <span className={style.price}>{formatMoney(totalPrice, 'đ')}</span>
                        <button onClick={createOrder}>Thanh toán</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
