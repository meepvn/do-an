import { faBox, faShop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import useAuth from '~/hooks/useAuth';
import style from './style.module.scss';
import { formatMoney, orderStatusToText } from '~/ultis';
import { useNavigate } from 'react-router-dom';
const MyOrder = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const auth = useAuth();
    useEffect(() => {
        const Option = {
            headers: { 'Content-Type': 'application/json', token: auth.token },
        };
        (async () => {
            const res = await fetch(`http://localhost:3100/api/order/personal`, Option);
            const json = await res.json();
            console.log(json);
            setData(json);
        })();
    }, [auth.token]);
    console.log(data);

    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <FontAwesomeIcon icon={faBox} className={style.icon} />
                <h2>Đơn hàng</h2>
            </div>
            {data?.map((item) => {
                return (
                    <div key={item.id} className={style.wrapperItem}>
                        <div className={style.headerItem}>
                            <div className={style.infoShop}>
                                <FontAwesomeIcon icon={faShop} className={style.icon} /> asos.com
                                <span onClick={() => navigate('/men')}>
                                    <FontAwesomeIcon icon={faShop} className={style.icon} /> Xem
                                    shop
                                </span>
                            </div>
                            <div className={style.statusOrder}>
                                Người gửi đang liên hệ với bạn xin chú ý điện thoại
                                <span>{orderStatusToText(item.TinhTrang)}</span>
                            </div>
                        </div>
                        {item.ChiTiet?.map((element) => {
                            return (
                                <div key={element.id} className={style.contentItem}>
                                    <div className={style.infoProduct}>
                                        <p className={style.title}>
                                            {element.TenSP} - {element.Size}
                                        </p>
                                        <p>
                                            <span>Số lượng: </span> {element.SoLuong}
                                        </p>
                                    </div>
                                    <div className={style.price}>
                                        {element.SoLuong > 1 && (
                                            <p>
                                                {' '}
                                                <span>{formatMoney(element.DonGia, 'đ')}</span>
                                                <span>
                                                    {formatMoney(
                                                        element.DonGia -
                                                            (element.DonGia * element.KhuyenMai) /
                                                                100,
                                                        'đ',
                                                    )}
                                                </span>
                                            </p>
                                        )}
                                        <div className={style.footerItem}>
                                            Thành tiền:{' '}
                                            <span>{formatMoney(element.ThanhTien, 'đ')}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        <div className={style.totalPrice}>
                            Tổng số tiền: <span>{formatMoney(item.TongTien, 'đ')}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default MyOrder;
