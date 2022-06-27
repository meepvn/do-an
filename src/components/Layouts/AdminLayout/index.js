import Header from './components/Header';
import Sidebar from './components/Sidebar';

function AdminLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}

export default AdminLayout;
