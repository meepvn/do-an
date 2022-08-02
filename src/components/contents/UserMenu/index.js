import { faBox, faClose, faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import style from './style.module.scss';
const UserMenu = () => {
    return (
        <div className={style.wrapperUserMenu}>
            <FontAwesomeIcon
                className={style.icon}
                icon={faUserLarge}
                // onClick={() => navigate('/account/login')}
            />
            <ul className={style.list}>
                <li className={style.listItem}>
                    <div>
                        <p>
                            <span>Đăng nhập</span>
                            <span>Đăng ký</span>
                        </p>
                        <FontAwesomeIcon icon={faClose} />
                    </div>
                </li>
                <li className={style.listItem}>
                    <span>
                        <FontAwesomeIcon icon={faUserLarge} />{' '}
                    </span>
                    <span>Tài khoản của tôi</span>
                </li>
                <li className={style.listItem}>
                    <span>
                        <FontAwesomeIcon icon={faBox} />{' '}
                    </span>
                    <span>Đơn hàng của tôi</span>
                </li>
            </ul>
        </div>
    );
};

export default UserMenu;
