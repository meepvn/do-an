import style from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUserGroup,
    faBarsProgress,
    faNoteSticky,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import useAuth from '~/hooks/useAuth';
function AdminSidebar() {
    const auth = useAuth();
    return (
        <div className={style.wrapper}>
            <h4>Quản lí</h4>
            <ul>
                <NavLink to="/admin/customer">
                    <li className={style.list}>
                        <FontAwesomeIcon className={style.icon} icon={faUserGroup} />
                        Quản lý khách hàng
                    </li>
                </NavLink>

                <NavLink to="/admin/product">
                    <li className={style.list}>
                        <FontAwesomeIcon className={style.icon} icon={faBarsProgress} /> Quản lý sản
                        phẩm
                    </li>
                </NavLink>
                <NavLink to="/admin/order">
                    <li className={style.list}>
                        <FontAwesomeIcon className={style.icon} icon={faNoteSticky} /> Quản lý đơn
                        hàng
                    </li>
                </NavLink>
                {auth.userInfo.Quyen > 1 && (
                    <NavLink to="/manager/account">
                        <li className={style.list}>
                            <FontAwesomeIcon className={style.icon} icon={faUser} /> Quản lý tài
                            khoản
                        </li>
                    </NavLink>
                )}
            </ul>
        </div>
    );
}

export default AdminSidebar;
