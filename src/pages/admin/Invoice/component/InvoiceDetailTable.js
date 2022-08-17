import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState, useEffect } from 'react';
import { faPenToSquare, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import style from './style.module.scss';

import { deleteApi, getData } from '~/webService';
import AlertWarning from '~/components/infoModals/AlertWarning';
import { formatMoney } from '~/ultis';
function InvoiceDetailTable({ data, setData, setAlert }) {
    // const [adding, setAdding] = useState(false);
    // const [editting, setEditting] = useState(false);
    // const [deleting, setDeleting] = useState(false);
    // const selectedProductRef = useRef();
    const [show, setShow] = useState(false);
    useEffect(() => {
        if (show) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
    }, [show]);

    // const handleUpdate = () => {
    //     setShow(true);
    //     setEditting(true);
    // };

    // const handleDelete = async (idProduct) => {
    //     const res = await deleteApi('instock', idProduct);
    //     const reponse = await res.json();
    //     if (reponse.status !== 'OK') {
    //         return;
    //     } else {
    //         const newData = await getData();
    //         setShow(false);
    //         setData(newData);
    //         setAlert({
    //             show: true,
    //             type: 'success',
    //             message: 'Xóa thành công',
    //         });
    //     }
    // };
    return (
        <div className={style.wrapperTblPro}>
            {/* {deleting && (
                <AlertWarning
                    setShow={setShow}
                    handleDelete={handleDelete}
                    setDeleting={setDeleting}
                    selectedProductId={selectedProductRef.current}
                />
            )} */}
            {/* {adding === true ? (
                <AddInstock
                    setShow={setShow}
                    setAlert={setAlert}
                    setData={setData}
                    setAdding={setAdding}
                    selectedProduct={{
                        id: selectedProductRef.current.id,
                        TenSP: selectedProductRef.current.TenSP,
                        SoLuong: selectedProductRef.current.SoLuong,
                    }}
                />
            ) : null} */}
            {/* {editting === true ? (
                <EditInstock
                    setShow={setShow}
                    setAlert={setAlert}
                    setData={setData}
                    selectedProduct={{ ...selectedProductRef.current }}
                    setEditting={setEditting}
                />
            ) : null} */}
            <table border="1">
                <thead>
                    <tr>
                        <th>Mã đơn hàng</th>
                        <th>Tên sản phẩm</th>
                        <th>Size</th>
                        <th>Đơn giá</th>
                        <th>Khuyến Mãi</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                        <th colSpan="2">Thao Tác</th>
                    </tr>
                </thead>
                {data.map((item) => {
                    return (
                        <tbody key={item.id}>
                            <tr>
                                <td rowSpan={item.ChiTiet.length + 3}>{item.id}</td>
                                {/* {item.SoLuong.length === 0 && (
                                    <td colSpan="4">Sản phẩm chưa có số lượng</td>
                                )} */}
                            </tr>
                            {item.ChiTiet.map((element) => {
                                return (
                                    <tr key={element.id}>
                                        <td>
                                            <div className={style.nameWrapper}>
                                                <span className={style.name}>{element.TenSP}</span>
                                                <span className={style.fullName}>
                                                    {element.TenSP}
                                                </span>
                                            </div>
                                        </td>
                                        <td>{element.Size}</td>
                                        <td>{formatMoney(element.DonGia, 'đ')}</td>
                                        <td>{element.KhuyenMai}%</td>
                                        <td>{element.SoLuong}</td>
                                        <td>{formatMoney(element.ThanhTien, 'đ')}</td>
                                        <td>
                                            <button
                                                className={style.edit}
                                                // onClick={() => {
                                                //     handleUpdate();
                                                //     selectedProductRef.current = {
                                                //         id: item.id,
                                                //         TenSP: item.TenSP,
                                                //         element: {
                                                //             id: element.id,
                                                //             Size: element.Size,
                                                //             SoLuong: element.SoLuong,
                                                //         },
                                                //     };
                                                // }}
                                            >
                                                <FontAwesomeIcon icon={faPenToSquare} /> Sửa
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                className={style.delete}
                                                // onClick={() => {
                                                //     setShow(true);
                                                //     setDeleting(true);
                                                //     selectedProductRef.current = instock.id;
                                                // }}
                                            >
                                                <FontAwesomeIcon icon={faTrash} /> Xóa
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                            {item.ChiTiet.length > 0 ? (
                                <tr>
                                    <td colSpan={1} className={style.totalPrice}>
                                        Tổng tiền
                                    </td>
                                    <td colSpan={7}>{formatMoney(item.TongTien, 'đ')}</td>
                                </tr>
                            ) : (
                                <tr>
                                    <td colSpan={8}>Đơn hàng chưa có sản phẩm</td>
                                </tr>
                            )}
                            <tr>
                                <td
                                    className={style.addInstock}
                                    colSpan={8}
                                    // onClick={() => {
                                    //     setShow(true);
                                    //     selectedProductRef.current = item;
                                    //     setAdding(true);
                                    // }}
                                >
                                    <FontAwesomeIcon icon={faPlus} className={style.iconPlus} />
                                </td>
                            </tr>
                        </tbody>
                    );
                })}
            </table>
        </div>
    );
}
export default InvoiceDetailTable;
