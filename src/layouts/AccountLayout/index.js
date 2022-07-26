import React from 'react';
import { Outlet } from 'react-router-dom';
import style from './style.module.scss';
const AccountLayout = () => {
    return (
        <div className={style.modal}>
            <div className={style.modalOverlay}></div>
            <Outlet />
        </div>
    );
};

export default AccountLayout;
