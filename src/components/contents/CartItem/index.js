import { useEffect, useRef, useState } from 'react';
import style from './style.module.scss';
import { formatMoney } from '~/ultis';
import useLocalStorage from '~/hooks/useLocalStorage';

export default function CartItem({ data, handleUpdateCart, deleteCartItem }) {
    const [count, setCount] = useState(data.SoLuong);
    const [itemsInCart, setItemInCart] = useLocalStorage('cart', []);
    console.log(itemsInCart);
    useEffect(() => {
        handleUpdateCart(count, data.id_soluong);
    }, [count]);
    const handleIncrease = () => {
        // const newCart = itemsInCart.map((item) => {
        //     if (item.id === data.id && item.id_soluong === data.id_soluong)
        //         return { ...item, SoLuong: item.SoLuong + 1 };
        //     else return item;
        // });
        // console.log('increase', newCart);
        // itemsInCart = newCart;
        // localStorage.setItem('cart', JSON.stringify(newCart));
        setCount(count + 1);
    };
    const handleDecrease = () => {
        // if (data.SoLuong <= 1) return;
        // const newCart = itemsInCart?.map((item) => {
        //     if (item.id === data.id && item.id_soluong === data.id_soluong)
        //         return { ...item, SoLuong: item.SoLuong - 1 };
        //     else return item;
        // });
        // console.log('reduce', newCart);
        // localStorage.setItem('cart', JSON.stringify(newCart));
        setCount(count - 1);
    };
    return (
        <div className={style.wrappperCartItem}>
            <div className={style.img}>
                <img src={`http://localhost:3100/images/${data.TenAnh}`} alt="img" />
            </div>
            <div className={style.content}>
                <p className={style.name}>{data.TenSP}</p>
                <p>Size: {data.Size}</p>
                <p className={style.price}>
                    {/* <span>{formatMoney(data.GiaGoc, '₫')}</span>
                    Giá:<span>{formatMoney(data.GiaKM, '₫')}</span> */}
                </p>

                <div className={style.btnCount}>
                    <button className={style.prev} onClick={handleDecrease}>
                        -
                    </button>
                    <span>{count}</span>
                    <button onClick={handleIncrease}>+</button>
                </div>
                <p>Thành tiền:{formatMoney(data.GiaKM * count, '₫')}</p>
                <button
                    onClick={() => {
                        deleteCartItem(data.id_soluong);
                    }}
                >
                    Xóa
                </button>
            </div>
        </div>
    );
}
