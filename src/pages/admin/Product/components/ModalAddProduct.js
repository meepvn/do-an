import style from '../style.module.scss';
import { useEffect, useRef, useState } from 'react';
import { addProduct, getData } from '~/webService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faImage, faUpload } from '@fortawesome/free-solid-svg-icons';
import { validator } from '~/ultis';
import { types } from 'sass';
function ModalAddProduct(props) {
    const inputRef = useRef();
    const [previewIMG, setPreviewIMG] = useState();
    const [selectedFile, setSelectedFile] = useState(null);
    const [checked, setChecked] = useState(1);
    console.log(props.types);
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
            id: 1,
            name: 'Nam',
        },
        {
            id: 2,
            name: 'Nữ',
        },
    ];
    useEffect(() => {
        return () => {
            previewIMG && URL.revokeObjectURL(previewIMG.preview);
        };
    }, [previewIMG]);
    const handlePreviewIMG = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        console.log(file);
        setPreviewIMG(file);
    };

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
        if (!validator.positive(inputValue.DonGia)) {
            console.log('Don gia sai roi');
            return false;
        }
        if (!validator.percent(inputValue.KhuyenMai)) {
            console.log('KM sai roi');
            return false;
        }
        return isValid;
    };

    const handleSubmit = async () => {
        console.log('data', inputValue);
        let isValid = validateInput();
        console.log(isValid);
        if (isValid === true) {
            const myForm = new FormData();
            myForm.append('TenSP', inputValue.TenSP);
            myForm.append('Loai', inputValue.Loai);
            myForm.append('DonGia', inputValue.DonGia);
            myForm.append('GioiTinh', inputValue.GioiTinh);
            myForm.append('KhuyenMai', inputValue.KhuyenMai);
            myForm.append('product', inputValue.Anh);
            const res = await addProduct(myForm);
            const reponse = await res.json();
            console.log('reponse', reponse);
            if (reponse.status !== 'OK') {
                console.log(reponse);
                return;
            } else {
                const newData = await getData();
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
                        <label>Tên sản phẩm:</label>
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
                        <label>Loại sản phẩm:</label>
                        <input
                            type="text"
                            value={inputValue.Loai}
                            onChange={(event) => {
                                setInputValue({ ...inputValue, Loai: event.target.value });
                            }}
                            placeholder="Nhập loại sản phẩm ..."
                        ></input>
                        <select>
                            {/* {types.map((type) => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))} */}
                        </select>
                    </div>
                    <div className={style.modalInput}>
                        <label>Đối tượng:</label>
                        <div className={style.gender}>
                            {gender.map((item) => {
                                return (
                                    <div className={style.genderItem} key={item.id}>
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
                    </div>
                    <div className={style.modalInput}>
                        <label>Đơn giá:</label>
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
                        <label>Khuyến mãi:</label>
                        <input
                            type="number"
                            value={inputValue.KhuyenMai}
                            onChange={(event) => {
                                setInputValue({ ...inputValue, KhuyenMai: event.target.value });
                            }}
                            placeholder="Nhập khuyến mãi ..."
                        ></input>
                    </div>
                    <div className={style.addImg}>
                        <input
                            ref={inputRef}
                            type="file"
                            style={{ display: 'none' }}
                            onChange={(event) => {
                                setSelectedFile(event.target.files[0]);
                                setInputValue({ ...inputValue, Anh: event.target.files[0] });
                                handlePreviewIMG(event);
                            }}
                        ></input>
                        <button
                            onClick={(e) => {
                                inputRef.current.click();
                            }}
                        >
                            <FontAwesomeIcon icon={faUpload} /> Chọn ảnh
                        </button>
                        <div className={style.previewIMG}>
                            {previewIMG ? (
                                <img src={previewIMG.preview} alt="img" />
                            ) : (
                                <FontAwesomeIcon icon={faImage} className={style.noIMG} />
                            )}
                        </div>
                    </div>
                    <div className={style.modalBtn}>
                        <button onClick={handleSubmit}>Thêm</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ModalAddProduct;
