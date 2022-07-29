import CustomerHeader from '~/components/headers/CustomerHeader';
import CustomerFooter from '~/components/footers/CustomerFooter';
import News from '~/components/contents/News';
import { Outlet } from 'react-router-dom';

export default function CustomerLayout() {
    return (
        <div>
            <CustomerHeader />
            <News />
            <Outlet />
            <CustomerFooter />
        </div>
    );
}
