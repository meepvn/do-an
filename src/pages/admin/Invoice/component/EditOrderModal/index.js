import style from './style.module.scss';
import { useState, useRef, useEffect } from 'react';
import { getData, getInvoice, updateApi } from '~/webService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

function EditOrderModal({ selectedOrder, setData, setEditing, setAlert }) {
    const [inputValue, setInputValue] = useState({
        HoTen: selectedOrder.HoTen,
        SDT: selectedOrder.SDT,
        TinhTrang: selectedOrder.TinhTrang,
        GhiChu: selectedOrder.GhiChu,
    });

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => (document.body.style.overflow = 'unset');
    }, []);

    const orderStatus = [
        { id: 1, title: 'Chờ xác nhận' },
        { id: 2, title: 'Đã xác nhận' },
        { id: 3, title: 'Đang giao hàng' },
        { id: 4, title: 'Thành công' },
        { id: 5, title: 'Hủy' },
        { id: 6, title: 'Hoàn đơn' },
    ];
    const handleUpdate = async () => {
        let res = await updateApi('order', selectedOrder.id, inputValue);
        await res.json();
        setAlert({ show: true, message: 'Sửa thành công', type: 'success' });
        res = await getInvoice();
        setData(res);
        setEditing(false);
    };
    return (
        <div className={style.modalBody}>
            <div className={style.modalLayer}></div>
            <div className={style.modalContainer}>
                <div className={style.modalHeader}>
                    <h3>Sửa thông tin đơn hàng</h3>
                    <FontAwesomeIcon
                        className={style.icon}
                        icon={faClose}
                        onClick={() => setEditing(false)}
                    />
                </div>
                <div className={style.modalContent}>
                    <div className={style.modalInput}>
                        <label>Tên khách hàng</label>
                        <input type="text" value={selectedOrder.HoTen} disabled></input>
                    </div>
                    <div className={style.modalInput}>
                        <label>Số điện thoại</label>
                        <input type="text" value={selectedOrder.SDT} disabled></input>
                    </div>
                    <div className={style.modalInput}>
                        <label>Tình trạng </label>
                        <select
                            value={inputValue.TinhTrang}
                            onChange={(e) =>
                                setInputValue({ ...inputValue, TinhTrang: e.target.value })
                            }
                        >
                            {orderStatus.map((status) => (
                                <option value={status.id} key={status.id}>
                                    {status.title}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={style.modalInput}>
                        <label>Ghi chú </label>
                        <textarea
                            value={inputValue.GhiChu}
                            type="text"
                            placeholder="Ghi chú ..."
                            onChange={(e) =>
                                setInputValue({ ...inputValue, GhiChu: e.target.value })
                            }
                        />
                    </div>

                    <div className={style.modalBtn}>
                        <button onClick={handleUpdate}>Hoàn tất</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EditOrderModal;
