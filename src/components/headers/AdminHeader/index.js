import style from './style.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';
import useAuth from '~/hooks/useAuth';
import UserMenu from '~/components/contents/UserMenu';

function AdminHeader() {
    const auth = useAuth();
    return (
        <div className={style.header}>
            <img src={images.logo} alt="logo" />
            <div className={style.account} onClick={() => auth.logout()}>
                <FontAwesomeIcon icon={faUserLarge} />
                <UserMenu />
            </div>
        </div>
    );
}

export default AdminHeader;
