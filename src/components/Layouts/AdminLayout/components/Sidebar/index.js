import style from './style.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUserGroup, faBarsProgress, faNoteSticky } from '@fortawesome/free-solid-svg-icons';
function Sidebar() {
  return (
    <div className={style.wrapper}>
      <h4>Quản lí</h4>
      <ul>
      
      <li className={style.list}>
        <FontAwesomeIcon className={style.icon} icon={faUserGroup}/>Quản lí người dùng
      </li>

      
      <li className={style.list}>
      <FontAwesomeIcon className={style.icon} icon={faBarsProgress}/> Quản lí sản phẩm
      </li>

      
      <li className={style.list}>
      <FontAwesomeIcon className={style.icon} icon={faNoteSticky} /> Quản lí đơn hàng
      </li>

      </ul>
    </div>
  )
}

export default Sidebar;
