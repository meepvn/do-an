import React from 'react';
import style from './style.module.scss';
import images from '~/assets/images';
const Cart = () => {
    const { cartIMG } = images;
    return (
        <div className={style.wrapperCart}>
            <dtv className={style.noProduct}>
                <div className={style.img}>
                    <img src={cartIMG} alt="img" />
                </div>
                <p>Hiện chưa có sản phẩm nào trong giỏ hàng</p>
                <span className={style.btnBuy}>Mua ngay</span>
            </dtv>
        </div>
    );
};

export default Cart;
