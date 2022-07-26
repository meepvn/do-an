import style from '../style.module.scss';
import { useRef, useState } from 'react';
import { addProduct, getData } from '~/webService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
function ModalAddProduct(props) {
    const IdRef = useRef();
    const [selectedFile, setSelectedFile] = useState(null);
    const [checked, setChecked] = useState(1);
    const [inputValue, setInputValue] = useState({
        TenSP: '',
        Loai: '',
        DonGia: '',
        GioiTinh: 1,
        KhuyenMai: '',
        Anh: '',
    });
    const gender = [
        {
            id: '0',
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
            // console.log(inputValue[arr[i]]);
            if (!inputValue[arr[i]]) {
                isValid = false;
                alert('Không được để trống ' + arr[i]);
                break;
            }
        }
        return isValid;
    };

    const handleSubmit = async () => {
        console.log('data', inputValue);
        let isValid = validateInput();
        if (isValid === true) {
            const myForm = new FormData();
            myForm.append('TenSP', inputValue.TenSP);
            myForm.append('Loai', inputValue.Loai);
            myForm.append('DonGia', inputValue.DonGia);
            myForm.append('GioiTinh', inputValue.GioiTinh);
            myForm.append('KhuyenMai', inputValue.KhuyenMai);
            myForm.append('product', inputValue.Anh);
            const res = await addProduct(props.link, myForm);
            const reponse = await res.json();
            if (reponse.status !== 'OK') {
                console.log(reponse);
                return;
            } else {
                const newData = await getData();
                console.log('Error');
                await props.setData(newData);
                props.setShow(false);
                setInputValue({
                    TenSP: '',
                    Loai: '',
                    DonGia: '',
                    GioiTinh: 1,
                    KhuyenMai: '',
                    Anh: '',
                });
            }
        }
    };

    return (
        <div className={style.modalBody}>
            <div className={style.modalLayer}></div>
            <div className={style.modalContainer}>
                <div className={style.modalHeader}>
                    <h3>Thêm sản phẩm</h3>
                    <FontAwesomeIcon
                        className={style.icon}
                        icon={faClose}
                        onClick={props.handleToggleModalAdd}
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
                </div>
                <div className={style.addImg}>
                    <input
                        type="file"
                        onChange={(event) => {
                            setInputValue({ ...inputValue, Anh: event.target.files[0] });
                        }}
                    ></input>
                </div>
                <div className={style.btn}>
                    <button onClick={handleSubmit}>ADD</button>
                </div>
            </div>
        </div>
    );
}
export default ModalAddProduct;
