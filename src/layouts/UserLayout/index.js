import Header from './components/Header';
import Footer from './components/Footer';
import style from'./style.module.scss'
function UserLayout({ children }) {
  return (
    <div className={style.wrapper} >
      <Header />
      <div className={style.content}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default UserLayout;
