import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import style from './style.module.scss';
const AccountLayout = () => {
    const navigate = useNavigate();
    return (
        <div className={style.modal}>
            <div className={style.modalOverlay}>
                <div
                    className={style.backHome}
                    onClick={() => {
                        navigate('/');
                    }}
                >
                    <FontAwesomeIcon icon={faHome} /> Về trang chủ
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default AccountLayout;
