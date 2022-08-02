import style from './style.module.scss';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { formatMoney } from '~/ultis';
import Filter from '../Filter';
import { useState, useMemo } from 'react';
const ViewAll = () => {
    const navigate = useNavigate();
    const [{ products, types: productTypes }] = useOutletContext();
    const [filterOptions, setFilterOptions] = useState(() => {
        return {
            gender: JSON.parse(localStorage.getItem('gender')) ?? 1,
            type: sessionStorage.getItem('type') ?? '',
        };
    });
    const filteredData = useMemo(() => {
        let result = products?.filter(
            (item) => item.GioiTinh === filterOptions.gender || item.GioiTinh === 3,
        );
        if (filterOptions.type) result = result?.filter((item) => item.Loai === filterOptions.type);
        if (filterOptions.price)
            result = result.filter((item) => item.DonGia <= filterOptions.price);
        return result;
    }, [products, filterOptions.gender, filterOptions.type, filterOptions.price]);
    return (
        <div className={style.wrapperViewAll}>
            <div></div>
            <Filter
                data={productTypes}
                setFilterOptions={setFilterOptions}
                filterOptions={filterOptions}
            />
            <div className={style.content}>
                {filteredData?.map((item) => {
                    return (
                        <div className={style.itemContent} key={item.id}>
                            <div
                                className={style.img}
                                onClick={() => navigate(`/detail/${item.id}`)}
                            >
                                <img src={`http://localhost:3100/images/${item.TenAnh}`} alt="aa" />
                                <span className={style.discount}>-{item.KhuyenMai}%</span>
                            </div>
                            <div className={style.itemInfo}>
                                <span
                                    className={style.name}
                                    onClick={() => {
                                        navigate(`/detail/${item.id}`);
                                    }}
                                >
                                    {item.TenSP}
                                </span>
                                <p className={style.price}>
                                    <span>{formatMoney(item.DonGia, ' ')} </span>
                                    <span>
                                        {formatMoney(
                                            item.DonGia - (item.DonGia * item.KhuyenMai) / 100,
                                            'đ',
                                        )}
                                    </span>
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ViewAll;
