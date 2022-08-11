import { useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import ViewProduct from '~/components/contents/ViewProduct';
import { removeAccents } from '~/ultis';
export default function Search() {
    const [{ products }] = useOutletContext();
    const { q } = useParams();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (products) setLoading(false);
    }, [products]);
    if (loading) return <h1>loading...</h1>;
    const filteredData = products.filter((item) => {
        const filterValue = q.replaceAll('-', ' ');
        const filterName = removeAccents(item.TenSP);
        const filterType = removeAccents(item.Loai);
        return filterName.includes(filterValue) || filterType.includes(filterValue);
    });
    return <ViewProduct data={filteredData} />;
}
