import CustomerHeader from '~/components/headers/CustomerHeader';
import CustomerFooter from '~/components/footers/CustomerFooter';
import News from '~/components/contents/News';
import { Outlet } from 'react-router-dom';
import { getData } from '~/webService';
import { useEffect, useState } from 'react';

export default function CustomerLayout() {
    const [data, setData] = useState([]);
    useEffect(() => {
        (async () => {
            const resData = await getData();
            setData(resData);
        })();
    }, [setData]);
    return (
        <div>
            <CustomerHeader />
            <News />
            <Outlet context={[data, setData]} />
            <CustomerFooter />
        </div>
    );
}
