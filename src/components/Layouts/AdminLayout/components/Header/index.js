import style from './style.module.scss'
import images from '~/assets/images'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';
console.log(images);
function Header() {
  return (
    <div className={style.header}>
      <img src={images.logo} alt='logo'/>
      <div className={style.account}>
        <FontAwesomeIcon icon={faUserLarge}/>
      </div>
    </div>
  )
}

export default Header;
