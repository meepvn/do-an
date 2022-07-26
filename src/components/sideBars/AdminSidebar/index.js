import style from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faBarsProgress, faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
function AdminSidebar() {
    return (
        <div className={style.wrapper}>
            <h4>Quản lí</h4>
            <ul>
                <NavLink to="/admin/customer">
                    <li className={style.list}>
                        <FontAwesomeIcon className={style.icon} icon={faUserGroup} />
                        Quản lí người dùng
                    </li>
                </NavLink>

                <NavLink to="/admin/product">
                    <li className={style.list}>
                        <FontAwesomeIcon className={style.icon} icon={faBarsProgress} /> Quản lí sản
                        phẩm
                    </li>
                </NavLink>

                <li className={style.list}>
                    <FontAwesomeIcon className={style.icon} icon={faNoteSticky} /> Quản lí đơn hàng
                </li>
            </ul>
        </div>
    );
}

export default AdminSidebar;
