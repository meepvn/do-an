import React, { useEffect, useState } from 'react';
import images from '~/assets/images';
import style from './style.module.scss';
import { useNavigate, useOutletContext } from 'react-router-dom';
import CartItem from '~/components/contents/CartItem';
import useLocalStorage from '~/hooks/useLocalStorage';
import useAuth from '~/hooks/useAuth';
import { addOrder } from '~/webService';
import RequireLogin from '~/components/infoModals/RequireLogin';
import Alert from '~/components/infoModals/Alert';

const Cart = () => {
    const auth = useAuth();
    const { cartIMG } = images;
    const [loading, setLoading] = useState(true);
    const [{ products }] = useOutletContext();
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
        if (itemsInCart) setLoading(false);
    }, [products, itemsInCart]);
    if (loading) return <h1>Loading ...</h1>;
    const cartItems = itemsInCart?.map((item) => {
        const foundProduct = products?.find((product) => product.id.toString() === item.id);
        const size = foundProduct?.SoLuong.find(
            (instock) => instock.id.toString() === item.id_soluong,
        );

        return {
            TenSP: foundProduct?.TenSP,
            GiaKM: foundProduct?.DonGia - (foundProduct?.DonGia * foundProduct?.KhuyenMai) / 100,
            GiaGoc: foundProduct?.DonGia,
            TenAnh: foundProduct?.TenAnh,
            SoLuong: item?.SoLuong,
            id: item?.id,
            id_soluong: item?.id_soluong,
            Size: size?.Size,
        };
    });

    const updateItemCart = (count, id) => {
        const newCart = itemsInCart.map((item) => {
            if (item.id_soluong === id) return { ...item, SoLuong: count };
            else return item;
        });
        console.log(newCart);
        setItemsInCart(newCart);
    };

    const deleteCartItem = (id_delete) => {
        console.log(id_delete);
        setItemsInCart(itemsInCart?.filter((cartItem) => cartItem.id_soluong !== id_delete));
    };

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
        console.log(reponse);
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
            <div className={style.haveProduct}>
                {cartItems?.map((item, index) => {
                    return (
                        <>
                            <CartItem
                                key={index}
                                data={item}
                                handleUpdateCart={updateItemCart}
                                deleteCartItem={deleteCartItem}
                            />
                        </>
                    );
                })}
            </div>
            <button onClick={createOrder}>Thanh toán</button>
        </div>
    );
};

export default Cart;
