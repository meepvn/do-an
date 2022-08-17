import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { orderStatusToText } from '~/ultis';
import { faPenToSquare, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import EditOrderModal from './EditOrderModal';
import style from './style.module.scss';
import AddOrderModal from './AddOrderModal';

import AlertWarning from '~/components/infoModals/AlertWarning';
import { deleteApi } from '~/webService';
import { type } from '@testing-library/user-event/dist/type';
function InvoiceTable({ setAlert, data, setData }) {
    const fomatDate = (init) => {
        var d = new Date(init);
        var date = d.getDate();
        var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
        var year = d.getFullYear();
        var newDate = date + '/' + month + '/' + year;
        return newDate;
    };
    const dateRef = useRef();
    const [deleting, setDeleting] = useState(false);
    const [adding, setAdding] = useState(false);
    const [show, setShow] = useState(false);
    const [editing, setEditing] = useState(false);
    const selectedOrderRef = useRef();
    const handleDelete = async (id) => {
        const res = await deleteApi('order', id);
        const json = await res.json();
        console.log(json);
        setAlert({
            show: true,
            message: 'Xóa thành công',
            type: 'success',
        });
        setData(data?.filter((item) => item.id !== id));
    };

    return (
        <div className={style.wrapperTblPro}>
            <div className={style.wrapperBtn}>
                <button className={style.btnAdd} onClick={() => setAdding(true)}>
                    Tạo đơn hàng
                </button>
            </div>
            {deleting && (
                <AlertWarning
                    setDeleting={setDeleting}
                    handleDelete={handleDelete}
                    selectedProductId={selectedOrderRef.current.id}
                />
            )}
            {adding && <AddOrderModal setAdding={setAdding} />}

            {editing === true ? (
                <EditOrderModal
                    setAlert={setAlert}
                    setData={setData}
                    selectedOrder={{ ...selectedOrderRef.current }}
                    setEditing={setEditing}
                />
            ) : null}
            <table border="1">
                <thead>
                    <tr>
                        <th>Mã đơn hàng</th>
                        <th>Họ tên KH</th>
                        <th>Số điện thoại</th>
                        <th>Ngày tạo</th>
                        <th>Tình trạng đơn hàng </th>
                        <th>Ghi chú</th>
                        <th colSpan="3">Thao Tác</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>
                                    <div className={style.nameWrapper}>
                                        <span>{item.HoTen}</span>
                                    </div>
                                </td>

                                <td>{item.SDT}</td>

                                <td>{fomatDate(item.NgayTao)}</td>

                                <td>{orderStatusToText(item.TinhTrang)}</td>
                                <td>{item.GhiChu ? item.GhiChu : 'Không có ghi chú'}</td>
                                <td>
                                    <button
                                        className={style.edit}
                                        onClick={() => {
                                            selectedOrderRef.current = {
                                                id: item.id,
                                                HoTen: item.HoTen,
                                                GhiChu: item.GhiChu,
                                                SDT: item.SDT,
                                                TinhTrang: item.TinhTrang,
                                            };
                                            setEditing(true);
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faPenToSquare} /> Sửa
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className={style.delete}
                                        onClick={() => {
                                            selectedOrderRef.current = { id: item.id };
                                            setDeleting(true);
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faTrash} /> Xóa
                                    </button>
                                </td>
                                <td>
                                    <button className={style.edit}>Chi tiết</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
export default InvoiceTable;
