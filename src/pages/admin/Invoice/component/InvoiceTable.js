import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

import style from './style.module.scss';

// import AlertWarning from '~/components/infoModals/AlertWarning';
function InvoiceTable({ setAlert, data }) {
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
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const selectedProductRef = useRef();
    // const handleToggleModalAdd = () => {
    //     setShow(!show);
    // };
    let date = 0;
    return (
        <div className={style.wrapperTblPro}>
            <div className={style.wrapperBtn}>
                <button className={style.btnAdd}>Tạo hóa đơn</button>
            </div>
            {/* {deleting && (
                <AlertWarning
                    setDeleting={setDeleting}
                    handleDelete={handleDelete}
                    selectedProductId={selectedProductRef.current.id}
                />
            )} */}
            {/* {show === true ? (
                <ModalAddProduct
                    setData={props.setData}
                    setAlert={setAlert}
                    setShow={setShow}
                    productTypes={props.productTypes}
                    handleToggleModalAdd={handleToggleModalAdd}
                />
            ) : null}
            {showEdit === true ? (
                <ModalEditProduct
                    setAlert={setAlert}
                    setData={props.setData}
                    selectedProduct={{ ...selectedProductRef.current }}
                    setShowEdit={setShowEdit}
                />
            ) : null} */}
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
                    {data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>
                                    <div className={style.nameWrapper}>
                                        <span className={style.name}>{item.HoTen}</span>
                                        <span className={style.fullName}>{item.HoTen}</span>
                                    </div>
                                </td>

                                <td>{item.SDT}</td>

                                <td>{fomatDate(item.NgayTao)}</td>

                                <td>{item.TinhTrang}</td>
                                <td>{item.GhiChu ? item.GhiChu : 'Không có ghi chú'}</td>
                                <td>
                                    <button className={style.edit}>
                                        <FontAwesomeIcon icon={faPenToSquare} /> Sửa
                                    </button>
                                </td>
                                <td>
                                    <button className={style.delete}>
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
