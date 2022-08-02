import React from 'react';
import style from './style.module.scss';
import images from '~/assets/images';
import { formatMoney } from '~/ultis';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faTruckFast } from '@fortawesome/free-solid-svg-icons';
const Detail = () => {
    const { dataTest } = images;
    const data = {
        id: 1,
        TenSP: 'QUẦN JEANS NAM PHONG CÁCH ĐƯỜNG PHỐ MẠNH MẼ',
        Gia: 500000,
        KhuyenMai: 20,
        Anh: dataTest.quan3,
        size: 32,
    };

    return (
        <div className={style.wrapperDetail}>
            <div className={style.Image}>
                <img src={data.Anh} alt="img" />
            </div>
            <div className={style.content}>
                <p className={style.name}>{data.TenSP}</p>
                <p className={style.price}>
                    <span>Đơn giá: </span>
                    <span>{formatMoney(data.Gia, ' ')} </span>
                    <span>{formatMoney(data.Gia - (data.Gia * data.KhuyenMai) / 100, 'đ')}</span>
                    <span>Giảm {data.KhuyenMai}%</span>
                </p>
                <p className={style.color}>
                    <span>Màu sắc:</span>
                </p>
                <p className={style.size}>
                    <span>Size:</span>
                    <span>{data.size}</span>
                </p>
                <p className={style.ship}>
                    <span>Vận chuyển: </span>
                    <span>
                        {' '}
                        <FontAwesomeIcon icon={faTruckFast} /> Miễn phí vận chuyển trên toàn quốc
                    </span>
                </p>
                <p className={style.size}>
                    <span>Số lượng:</span>
                    <span>123</span>
                </p>
                <div className={style.btnContent}>
                    <div className={style.btn} id={style.addBtn}>
                        <FontAwesomeIcon icon={faCartPlus} /> Thêm Vào Giỏ Hàng
                    </div>
                    <div className={style.btn} id={style.buyBtn}>
                        Mua Ngay
                    </div>
                </div>
            </div>
            <div className={style.suport}>
                <h3>Hỗ trợ trực tuyến</h3>
                <div className={style.suportContent}>
                    <p>Bạn muốn hỏi về sản phẩm nào </p>
                    <p>Zalo/Hotline: 0360.000.222</p>
                    <p className={style.titleSuport}>Chính sách bán hàng</p>
                    <div className={style.policy}>
                        <p>
                            <span className={style.number}>1</span>{' '}
                            <span className={style.description}>Giao Hàng Toàn Quốc</span>
                        </p>
                        <p>
                            <span className={style.number}>2</span>{' '}
                            <span className={style.description}>Thanh Toán Khi Nhận Hàng</span>
                        </p>
                        <p>
                            <span className={style.number}>3</span>{' '}
                            <span className={style.description}>Đổi Trả Trong 7 Ngày</span>
                        </p>
                        <p>
                            <span className={style.number}>4</span>{' '}
                            <span className={style.description}>Hoàn Ngay Tiền Mặt</span>
                        </p>
                        <p>
                            <span className={style.number}>5</span>{' '}
                            <span className={style.description}>Chất Lượng Đảm Bảo</span>
                        </p>
                        <p>
                            <span className={style.number}>6</span>{' '}
                            <span className={style.description}>Hình Chụp Sản Phẩm Thật</span>
                        </p>
                        <p>
                            <span className={style.number}>7</span>{' '}
                            <span className={style.description}>Miễn Phí Giao Hàng</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Detail;
