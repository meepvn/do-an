import style from './style.module.scss';
import images from '~/assets/images';
// import SearchBar from '~/components/searchBars/AdminSearchBar';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import UserMenu from '~/components/contents/UserMenu';
import useLocalStorage from '~/hooks/useLocalStorage';
import CustomerSearchBar from '~/components/searchBars/CustomerSearchBar';
function CustomerHeader({ cart, data }) {
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
                    <CustomerSearchBar data={data} />
                </div>
                <div className={style.icons}>
                    <UserMenu />
                    <FontAwesomeIcon icon={faHeart} />
                    <span className={style.cart} onClick={() => navigate('/cart')}>
                        <FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon>
                        <span className={style.count}>{cart}</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default CustomerHeader;
