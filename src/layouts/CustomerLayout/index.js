import CustomerHeader from '~/components/headers/CustomerHeader';
import CustomerFooter from '~/components/footers/CustomerFooter';
import News from '~/components/contents/News';
import BannerHome from '~/components/contents/BannerHome';

export default function CustomerLayout() {
    return (
        <div>
            <CustomerHeader />
            <News />
            <BannerHome />
            <CustomerFooter />
        </div>
    );
}
