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
        Sort: '',
    });
    useEffect(() => {
        if (products) setLoading(false);
    }, [products]);
    if (loading) return <h1>Đang tải ...</h1>;
    const maleProducts = (() => {
        let result = products?.filter(
            (product) => product.GioiTinh === 1 || product.GioiTinh === 3,
        );
        result = result.map((product) => {
            return { ...product, GiaKM: product.DonGia * (1 - product.KhuyenMai / 100) };
        });
        return result;
    })();
    const maleTypes = maleProducts?.reduce((result, current) => {
        if (result.includes(current.Loai)) return result;
        return [...result, current.Loai];
    }, []);

    const filteredData = (() => {
        let result = maleProducts;
        if (filterOptions.Loai)
            result = result.filter((product) => product.Loai === filterOptions.Loai);
        if (filterOptions.Gia) {
            if (filterOptions.Gia === '1') {
                result = result.filter((product) => product.GiaKM <= 100000);
            } else if (filterOptions.Gia === '2') {
                result = result.filter(
                    (product) => product.GiaKM > 100000 && product.GiaKM <= 200000,
                );
            }
        }
        if (filterOptions.Sort) {
            console.log(filterOptions.Sort);
            if (filterOptions.Sort === '1') {
                result = result?.sort((a, b) => parseFloat(a.GiaKM) - parseFloat(b.GiaKM));
            }
            if (filterOptions.Sort === '2') {
                result = result?.sort((a, b) => parseFloat(b.GiaKM) - parseFloat(a.GiaKM));
            }
        }
        return result;
    })();

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
