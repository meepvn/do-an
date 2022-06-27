import styles from './HeaderAdmin.module.scss'
import logo from '../../../images/AsosLogo.svg'
// import logo from '~'
function HeaderAdmin(){

    return(
        <div  className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt='logo'/>
            </div>
            <div className={styles.account}>
                <h1>usser</h1>
            </div>
        </div>
    )
}
export default HeaderAdmin