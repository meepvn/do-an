import React, { useState, useEffect } from 'react';
import style from './style.module.scss';
import { formatMoney } from '~/ultis';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import Alert from '~/components/infoModals/Alert';
import RequireLogin from '~/components/infoModals/AlertWarning';
import useLocalStorage from '~/hooks/useLocalStorage';
const Detail = () => {
    const navigate = useNavigate();
    const [{ products }] = useOutletContext();
    const [itemsInCart, setItemsInCart] = useLocalStorage('cart', []);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (products) setLoading(false);
    }, [products]);
    const [alert, setAlert] = useState({
        show: false,
        type: '',
        message: '',
    });
    const { id } = useParams();
    const [newItem, setNewItem] = useState({
        id: id,
        SoLuong: 1,
        id_soluong: '',
    });
    const [loginWarning, setLoginWarning] = useState(false);
    if (loading) return <h1>Loading ...</h1>;
    const foundProduct = products?.find((item) => item.id === parseInt(id));
    const isProductExistInCard = (product) => {
        let result = false;
        itemsInCart?.forEach((item) => {
            if (item.id === product.id && item.id_soluong === product.id_soluong) result = true;
        });
        return result;
    };
    const addToCart = (buyNow = false) => {
        if (!newItem.id_soluong) {
            setAlert({
                show: true,
                type: 'warning',
                message: 'Vui lòng chọn size',
            });
            return;
        }

        if (isProductExistInCard(newItem)) {
            setAlert({
                show: true,
                type: 'warning',
                message: 'Sản phẩm đã tồn tại trong giỏ hàng',
            });
            return;
        } else {
            setAlert({
                show: true,
                type: 'success',
                message: 'Sản phẩm đã được thêm vào giỏ',
            });
        }
        setItemsInCart([...itemsInCart, newItem]);
        if (buyNow) navigate('/cart');
    };
    if (foundProduct) {
        return (
            <div className={style.wrapperDetail}>
                {loginWarning && <RequireLogin setShow={setLoginWarning} />}
                {alert.show && <Alert alert={alert} setAlert={setAlert} />}
                <div className={style.Image}>
                    <img src={`http://localhost:3100/images/${foundProduct.TenAnh}`} alt="img" />
                </div>
                <div className={style.content}>
                    <p className={style.name}>{foundProduct.TenSP}</p>
                    <p className={style.price}>
                        <span>Đơn giá: </span>
                        <span>{formatMoney(foundProduct.DonGia, ' ')} </span>
                        <span>
                            {formatMoney(
                                foundProduct.DonGia -
                                    (foundProduct.DonGia * foundProduct.KhuyenMai) / 100,
                                'đ',
                            )}
                        </span>
                        <span>Giảm {foundProduct.KhuyenMai}%</span>
                    </p>

                    <p className={style.size}>
                        <span>Size:</span>

                        <select
                            onChange={(e) =>
                                setNewItem({
                                    ...newItem,
                                    id_soluong: e.target.value,
                                })
                            }
                        >
                            <option value="">Chọn size sản phẩm</option>
                            {foundProduct.SoLuong?.map((item) => {
                                return (
                                    <option key={item.Size} value={item.id}>
                                        {item.Size}
                                    </option>
                                );
                            })}
                        </select>
                    </p>
                    <p className={style.ship}>
                        <span>Vận chuyển: </span>
                        <span>
                            {' '}
                            <FontAwesomeIcon icon={faTruckFast} /> Miễn phí vận chuyển trên toàn
                            quốc
                        </span>
                    </p>
                    <div className={style.count}>
                        <span>Số lượng:</span>
                        <div className={style.btnCount}>
                            <button
                                className={style.prev}
                                disabled={newItem.SoLuong === 1}
                                onClick={() => {
                                    setNewItem({ ...newItem, SoLuong: newItem.SoLuong - 1 });
                                }}
                            >
                                -
                            </button>
                            <span>{newItem.SoLuong}</span>
                            <button
                                onClick={() =>
                                    setNewItem({ ...newItem, SoLuong: newItem.SoLuong + 1 })
                                }
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className={style.btnContent}>
                        <div className={style.btn} id={style.addBtn} onClick={() => addToCart()}>
                            <FontAwesomeIcon icon={faCartPlus} /> Thêm Vào Giỏ Hàng
                        </div>
                        <div
                            className={style.btn}
                            id={style.buyBtn}
                            onClick={() => addToCart(true)}
                        >
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
    } else return <h1>Không tìm thấy sản phẩm</h1>;
};
export default Detail;
