import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState, useEffect, createContext } from 'react';
import { faPenToSquare, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import style from './style.module.scss';

import { deleteApi, getData } from '~/webService';
import AlertWarning from '~/components/infoModals/AlertWarning';
import { formatMoney, orderStatusToText } from '~/ultis';
import AddDetailModal from './AddDetailModal';
export const orderDetailContext = createContext();
function InvoiceDetailTable({ data, setData, setAlert }) {
    const [addingDetail, setAddingDetail] = useState(false);
    // const [editting, setEditting] = useState(false);
    const [deletingDetail, setDeletingDetail] = useState(false);
    // const selectedProductRef = useRef();
    const [show, setShow] = useState(false);
    const selectedOrderRef = useRef();
    console.log(selectedOrderRef.current);
    useEffect(() => {
        if (show) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
    }, [show]);
    // const handleUpdate = () => {
    //     setShow(true);
    //     setEditting(true);
    // };

    const handleDelete = async () => {
        let res = await deleteApi('detail', selectedOrderRef.current);
        let reponse = await res.json();
        if (reponse.status !== 'OK') {
            return;
        } else {
            res = await fetch('http://localhost:3100/api/order');
            reponse = await res.json();
            setData(reponse);
            setAlert({
                show: true,
                type: 'success',
                message: 'Xóa thành công',
            });
        }
    };
    return (
        <orderDetailContext.Provider
            value={{ setData, setAlert, selectedOrder: selectedOrderRef.current }}
        >
            <div className={style.wrapperTblPro}>
                {deletingDetail && (
                    <AlertWarning handleDelete={handleDelete} setDeleting={setDeletingDetail} />
                )}
                {addingDetail && <AddDetailModal setAddingDetail={setAddingDetail} />}
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
                                                    <span className={style.name}>
                                                        {element.TenSP}
                                                    </span>
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
                                                    onClick={() => {
                                                        if (item.TinhTrang > 2) {
                                                            setAlert({
                                                                show: true,
                                                                type: 'warning',
                                                                message: `Tình trạng đơn hàng: ${orderStatusToText(
                                                                    item.TinhTrang,
                                                                )}`,
                                                            });
                                                            return;
                                                        }
                                                        // handleUpdate();
                                                        // selectedProductRef.current = {
                                                        //     id: item.id,
                                                        //     TenSP: item.TenSP,
                                                        //     element: {
                                                        //         id: element.id,
                                                        //         Size: element.Size,
                                                        //         SoLuong: element.SoLuong,
                                                        //     },
                                                        // };
                                                    }}
                                                >
                                                    <FontAwesomeIcon icon={faPenToSquare} /> Sửa
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    className={style.delete}
                                                    onClick={() => {
                                                        if (item.TinhTrang > 2) {
                                                            setAlert({
                                                                show: true,
                                                                type: 'warning',
                                                                message: `Tình trạng đơn hàng: ${orderStatusToText(
                                                                    item.TinhTrang,
                                                                )}`,
                                                            });
                                                            return;
                                                        }
                                                        setDeletingDetail(true);
                                                        selectedOrderRef.current = element.id;
                                                    }}
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
                                        onClick={() => {
                                            if (item.TinhTrang > 2) {
                                                setAlert({
                                                    show: true,
                                                    type: 'warning',
                                                    message: `Tình trạng đơn hàng: ${orderStatusToText(
                                                        item.TinhTrang,
                                                    )}`,
                                                });
                                                return;
                                            }
                                            selectedOrderRef.current = {
                                                id_donhang: item.id,
                                            };
                                            setAddingDetail(true);
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faPlus} className={style.iconPlus} />
                                    </td>
                                </tr>
                            </tbody>
                        );
                    })}
                </table>
            </div>
        </orderDetailContext.Provider>
    );
}
export default InvoiceDetailTable;
