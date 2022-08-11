import style from './style.module.scss';
import { formatMoney } from '~/ultis';
import { useNavigate } from 'react-router-dom';
import { useState, useMemo } from 'react';
const ViewProduct = ({ data }) => {
    const navigate = useNavigate();

    return (
        <div className={style.wrapperViewAll}>
            <div className={style.content}>
                {data?.map((item) => {
                    return (
                        <div className={style.itemContent} key={item.id}>
                            <div
                                className={style.img}
                                onClick={() => navigate(`/detail/${item.id}`)}
                            >
                                <img src={`http://localhost:3100/images/${item.TenAnh}`} alt="aa" />
                                {item.KhuyenMai && (
                                    <span className={style.discount}>-{item.KhuyenMai}%</span>
                                )}
                            </div>
                            <div className={style.itemInfo}>
                                <div className={style.nameWrapper}>
                                    <span
                                        className={style.name}
                                        onClick={() => {
                                            navigate(`/detail/${item.id}`);
                                        }}
                                    >
                                        {item.TenSP}
                                    </span>
                                    <span className={style.fullName}>{item.TenSP}</span>
                                </div>

                                <p className={style.price}>
                                    {/* {item.KhuyenMai > 0 && (
                                        <span className={style.priceMain}>
                                            {formatMoney(item.cost, ' ')}{' '}
                                        </span>
                                    )}
                                    <span className={style.monney}>
                                        {formatMoney(item.DonGia, ' ₫')}
                                    </span> */}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ViewProduct;
