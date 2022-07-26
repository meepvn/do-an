import style from '../style.module.scss';
import { useState } from 'react';
import { getData, updateApi } from '~/webService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import _ from 'lodash';
function ModalEditProduct(props) {
    const product = props.curentProduct;
    useEffect(() => {
        if (product && !_.isEmpty(product)) {
            setInputValue({
                TenSP: product.TenSP,
                Loai: product.Loai,
                DonGia: product.DonGia,
                GioiTinh: product.GioiTinh,
                KhuyenMai: product.KhuyenMai,
            });
            console.log(product);
        }
    }, [props.curentProduct]);

    const [checked, setChecked] = useState(1);
    const [inputValue, setInputValue] = useState({
        TenSP: '',
        Loai: '',
        DonGia: '',
        GioiTinh: 1,
        KhuyenMai: '',
    });
    const gender = [
        {
            id: 0,
            name: 'Nam',
        },
        {
            id: 1,
            name: 'Nữ',
        },
    ];

    const validateInput = () => {
        let isValid = true;
        const arr = ['TenSP', 'Loai', 'DonGia', 'KhuyenMai'];
        for (let i = 0; i < arr.length; i++) {
            if (!inputValue[arr[i]]) {
                isValid = false;
                alert('Không được để trống ' + arr[i]);
                break;
            }
        }
        return isValid;
    };

    const handleUpdate = async () => {
        let isValid = validateInput();
        if (isValid === true) {
            // console.log(product.id, inputValue);
            const res = await updateApi(props.link, product.id, inputValue);
            const reponse = await res.json();
            if (reponse !== 'OK') {
                console.log(reponse.message);
                return;
            } else {
                console.log(reponse);
                const newData = await getData();
                console.log('new data', newData);
                await props.setData(newData);
                props.setShowEdit(false);
                setInputValue({
                    TenSP: '',
                    Loai: '',
                    DonGia: '',
                    GioiTinh: 1,
                    KhuyenMai: '',
                });
            }
        }
    };
    return (
        <div className={style.modalBody}>
            <div className={style.modalLayer}></div>
            <div className={style.modalContainer}>
                <div className={style.modalHeader}>
                    <h3>Sửa thông tin sản phẩm</h3>
                    <FontAwesomeIcon
                        className={style.icon}
                        icon={faClose}
                        onClick={props.handleToggleShowModalEdit}
                    />
                </div>
                <div className={style.modalContent}>
                    <div className={style.modalInput}>
                        <label>Tên sản phẩm</label>
                        <input
                            type="text"
                            value={inputValue.TenSP}
                            onChange={(event) => {
                                setInputValue({ ...inputValue, TenSP: event.target.value });
                            }}
                            placeholder="Nhập tên sản phẩm ..."
                        ></input>
                    </div>
                    <div className={style.modalInput}>
                        <label>Loại sản phẩm</label>
                        <input
                            type="text"
                            value={inputValue.Loai}
                            onChange={(event) => {
                                setInputValue({ ...inputValue, Loai: event.target.value });
                            }}
                            placeholder="Nhập loại sản phẩm ..."
                        ></input>
                    </div>
                    <div className={style.modalInput}>
                        <label>Đối tượng</label>
                        {gender.map((item) => {
                            return (
                                <div key={item.id}>
                                    <input
                                        type="radio"
                                        onChange={() => {
                                            setChecked(item.id);
                                            setInputValue({ ...inputValue, GioiTinh: item.id });
                                        }}
                                        checked={checked === item.id}
                                    />
                                    {item.name}
                                </div>
                            );
                        })}
                    </div>
                    <div className={style.modalInput}>
                        <label>Đơn giá</label>
                        <input
                            type="number"
                            value={inputValue.DonGia}
                            onChange={(event) => {
                                setInputValue({ ...inputValue, DonGia: event.target.value });
                            }}
                            placeholder="Nhập đơn giá ..."
                        ></input>
                    </div>
                    <div className={style.modalInput}>
                        <label>Khuyến mãi</label>
                        <input
                            type="number"
                            value={inputValue.KhuyenMai}
                            onChange={(event) => {
                                setInputValue({ ...inputValue, KhuyenMai: event.target.value });
                            }}
                            placeholder="Nhập khuyến mãi ..."
                        ></input>
                    </div>
                    <button onClick={handleUpdate}>Submit</button>
                </div>
            </div>
        </div>
    );
}
export default ModalEditProduct;
