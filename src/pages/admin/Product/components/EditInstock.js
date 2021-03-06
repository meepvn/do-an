import style from '../style.module.scss';
import { useState } from 'react';
import { renderData, AddApi } from '~/webService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
function EditInstock(props) {
    console.log(props);
    const [inputValue, setInputValue] = useState({
        Size: '',
        SoLuong: '',
    });

    const validateInput = () => {
        let isValid = true;
        const arr = ['Size', 'SoLuong'];
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
        let isValid = validateInput();
        if (isValid === true) {
            setInputValue({ ...inputValue, id_sanpham: props.instockEdit.id });
            console.log(inputValue);
            const res = await AddApi(props.link, inputValue);
            const reponse = await res.json();
            console.log(reponse);
            if (reponse !== 'OK') {
                return;
            } else {
                const newData = await renderData(props.link);
                await props.setData(newData);
                props.setEditInstock(false);
                setInputValue({
                    Size: '',
                    SoLuong: '',
                });
            }
        }
    };

    return (
        <div className={style.modalBody}>
            <div className={style.modalLayer}></div>
            <div className={style.modalContainer}>
                <div className={style.modalHeader}>
                    <h3>Thêm số lượng sản phẩm</h3>
                    <FontAwesomeIcon
                        className={style.icon}
                        icon={faClose}
                        onClick={() => {
                            props.setEditInstock(false);
                        }}
                    />
                </div>
                <div className={style.modalContent}>
                    <div className={style.modalInput}>
                        <label>Tên sản phẩm</label>
                        <input type="text" value={props.instockEdit.TenSP} disabled></input>
                    </div>

                    <div className={style.modalInput}>
                        <label>Size</label>
                        <input
                            type="number"
                            value={inputValue.Size}
                            onChange={(event) => {
                                setInputValue({ ...inputValue, Size: event.target.value });
                            }}
                            placeholder="Nhập size..."
                        ></input>
                    </div>
                    <div className={style.modalInput}>
                        <label>Số Lượng</label>
                        <input
                            type="number"
                            value={inputValue.SoLuong}
                            onChange={(event) => {
                                setInputValue({ ...inputValue, SoLuong: event.target.value });
                            }}
                            placeholder="Nhập Số lượng ..."
                        ></input>
                    </div>

                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
}
export default EditInstock;
