import React, { useState, useEffect } from 'react';
// import Cart from '~/components/contents/Cart';
// import Detail from '~/components/contents/Detail';
import style from './style.module.scss';
import ViewProduct from '~/components/contents/ViewProduct';
import { useOutletContext } from 'react-router-dom';
import images from '~/assets/images';
import FilterProducts from '~/components/contents/FilterProducts';
import SliderIMG from '~/components/contents/SliderIMG';
import Breadcrumb from '~/components/contents/Breadcumb';
const Men = () => {
    sessionStorage.setItem('gender', 1);
    const [{ products }] = useOutletContext();
    const [loading, setLoading] = useState(true);
    const [filterOptions, setFilterOptions] = useState({
        Loai: '',
        Gia: '',
    });
    useEffect(() => {
        if (products) setLoading(false);
    }, [products]);
    if (loading) return <h1>Đang tải ...</h1>;
    const maleProducts = products?.filter(
        (product) => product.GioiTinh === 1 || product.GioiTinh === 3,
    );
    const maleTypes = maleProducts?.reduce((result, current) => {
        if (result.includes(current.Loai)) return result;
        return [...result, current.Loai];
    }, []);
    const filteredData = maleProducts?.filter((item) => {
        if (filterOptions.Loai) return item.Loai === filterOptions.Loai;
        return true;
    });
    return (
        <div className={style.wrapperPage}>
            <SliderIMG
                images={[images.menIMG, images.thoiTrangNamIMG, images.GiayIMG, images.aoTheThao]}
            />
            <div className={style.contentPage}>
                <div className={style.wraperNavigate}>
                    <Breadcrumb
                        links={[
                            { location: '/', text: 'Trang chủ' },
                            { location: '#', text: 'Thời trang nam' },
                        ]}
                    />
                </div>
                <div className={style.content}>
                    <FilterProducts
                        types={maleTypes}
                        filterOptions={filterOptions}
                        setFilterOptions={setFilterOptions}
                    />
                    <ViewProduct data={filteredData} />
                </div>
            </div>
        </div>
    );
};

export default Men;
