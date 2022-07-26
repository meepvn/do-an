import style from './style.module.scss'
import images from '~/assets/images'
import SearchBarUser from '../SearchBarUser';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBagShopping, faHeart, faUserLarge } from '@fortawesome/free-solid-svg-icons';
function Header() {
  return (
    <div className={style.headerHome}>
      <div className={style.headerRight}>
        <div className={style.image}>
        <img src={images.logo} alt='logo'/>
        </div>
        <div className={style.gender}>
          <p id={style.line}>NỮ</p>
          <p>NAM</p>
        </div>
      </div>
    <div className={style.headerLeft}>
      <div className={style.headerSearch}>
          <SearchBarUser />
      </div>
      <div className={style.icons}>
        <FontAwesomeIcon icon={faUserLarge}/>
        <FontAwesomeIcon icon={faHeart}/>
        <FontAwesomeIcon icon={faBagShopping}/>
      </div>
      </div>
    </div>
  )
}

export default Header;
