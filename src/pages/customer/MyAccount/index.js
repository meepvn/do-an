import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import style from './style.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAddressCard,
    faBox,
    faHome,
    faRightFromBracket,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import useAuth from '~/hooks/useAuth';
const MyAccount = () => {
    const { logoBlack, digitalIMG } = images;
    const auth = useAuth();
    const navigate = useNavigate();
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <div className={style.img} onClick={() => navigate('/')}>
                    <img src={logoBlack} alt="logo" />
                </div>
                <div className={style.title}>
                    <h1>My Account</h1>
                </div>
                <div className={style.img}>
                    <img src={digitalIMG} alt="img" />
                </div>
            </div>
            <div className={style.container}>
                <div className={style.navBar}>
                    <ul className={style.list}>
                        <li className={style.listItem}>
                            <div className={style.account}>
                                <div className={style.avatar}></div>
                                Hi,<span>{auth.userInfo.HoTen}</span>
                            </div>
                        </li>
                        <li className={style.listItem} onClick={() => navigate('/')}>
                            <FontAwesomeIcon icon={faHome} className={style.icon} />
                            <span>Trang chủ</span>
                        </li>
                        <li className={style.listItem} onClick={() => navigate('my-detail')}>
                            <FontAwesomeIcon icon={faAddressCard} className={style.icon} />
                            <span>Thông tin cá nhân</span>
                        </li>
                        <li className={style.listItem} onClick={() => navigate('account')}>
                            <FontAwesomeIcon icon={faUser} className={style.icon} />
                            <span>Tài khoản</span>
                        </li>
                        <li className={style.listItem} onClick={() => navigate('my-order')}>
                            <FontAwesomeIcon icon={faBox} className={style.icon} />
                            <span>Đơn hàng của tôi</span>
                        </li>
                        <li
                            className={style.listItem}
                            onClick={() => {
                                auth.logout();
                                navigate('/');
                            }}
                        >
                            <FontAwesomeIcon icon={faRightFromBracket} className={style.icon} />
                            <span>Đăng xuất</span>
                        </li>
                    </ul>
                </div>
                <Outlet />
            </div>
            <div className={style.footer}></div>
        </div>
    );
};

export default MyAccount;
