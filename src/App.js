import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import AuthContentProvider from './contexts/AuthContext';
import Login from './pages/account/Login';
import Register from './pages/account/Register';
import AccountLayout from './layouts/AccountLayout';
import AdminLayout from './layouts/AdminLayout';
import Product from './pages/admin/Product';

function App() {
    return (
        <Router>
            <AuthContentProvider>
                <Routes>
                    <Route path="/admin" element={<AdminLayout />}>
                        <Route path="product" element={<Product />} />
                        {/* <Route path="customer" element={<Customer />} /> */}
                    </Route>
                    {/* <Route path="/customer" element={<Customer />} /> */}
                    {/* <Route path="/" element={<Home />} /> */}
                    {/* <Route path="/product" element={<Product />} /> */}
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
