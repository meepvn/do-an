import style from './style.module.scss';
import images from '~/assets/images';
// import SearchBar from '~/components/searchBars/AdminSearchBar';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import UserMenu from '~/components/contents/UserMenu';
function CustomerHeader() {
    const navigate = useNavigate();
    return (
        <div className={style.headerHome}>
            <div className={style.headerRight}>
                <div className={style.image}>
                    <Link to="/">
                        <img src={images.logo} alt="logo" />
                    </Link>
                </div>
                <div className={style.gender}>
                    <Link to="/women">
                        <p id={style.line}>NỮ</p>
                    </Link>
                    <Link to="/men">
                        <p>NAM</p>
                    </Link>
                </div>
            </div>
            <div className={style.headerLeft}>
                <div className={style.headerSearch}>
                    <h1>Search bar</h1>
                </div>
                <div className={style.icons}>
                    <UserMenu />
                    <FontAwesomeIcon icon={faHeart} />
                    <FontAwesomeIcon icon={faBagShopping} onClick={() => navigate('/cart')} />
                </div>
            </div>
        </div>
    );
}

export default CustomerHeader;
