import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import style from'./style.module.scss'
function AdminLayout({ children }) {
  return (
    <div className={style.wrapper} >
      <Header />
      <div className={style.content}>
        <Sidebar />
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default AdminLayout;
