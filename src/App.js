import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import AuthContentProvider from './contexts/AuthContext';
import Login from './pages/account/Login';
import Register from './pages/account/Register';
import AccountLayout from './layouts/AccountLayout';
import AdminLayout from './layouts/AdminLayout';
import Product from './pages/admin/Product';
import ProtectedRoutes from './components/ProtectedRoutes';
import CustomerLayout from './layouts/CustomerLayout';
import Home from './pages/customer/Home';
import Men from './pages/customer/Men';
import ViewAll from './components/contents/ViewAlll';
import Detail from './components/contents/Detail';
import Women from './pages/customer/Women';

function App() {
    return (
        <Router>
            <AuthContentProvider>
                <Routes>
                    <Route path="/" element={<CustomerLayout />}>
                        <Route index element={<Home />} />
                        <Route path="men" element={<Men />} />
                        <Route path="women" element={<Women />} />
                        <Route path="products" element={<ViewAll />} />
                        <Route path="detail/:id" element={<Detail />} />
                    </Route>
                    <Route path="/admin" element={<ProtectedRoutes allowedRoles={[1, 2]} />}>
                        <Route element={<AdminLayout />}>
                            <Route path="product" element={<Product />} />
                        </Route>
                    </Route>
                    <Route path="/account" element={<AccountLayout />}>
                        <Route path="register" element={<Register />} />
                        <Route path="login" element={<Login />} />
                    </Route>
                </Routes>
            </AuthContentProvider>
        </Router>
    );
}
export default App;
