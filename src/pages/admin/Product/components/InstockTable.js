import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState, useEffect } from 'react';
import { faPenToSquare, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import style from './style.module.scss';
import AddInstock from './AddInstock';
import EditInstock from './EditInstock';
import { deleteApi, getData } from '~/webService';
import AlertWarning from '~/components/infoModals/AlertWarning';
function InstockTable({ data, setData, setAlert }) {
    const [adding, setAdding] = useState(false);
    const [editting, setEditting] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const selectedProductRef = useRef();
    // useEffect(() => {
    //     if (show) document.body.style.overflow = 'hidden';
    //     else document.body.style.overflow = 'unset';
    // }, [show]);

    const handleUpdate = () => {
        setEditting(true);
    };

    const handleDelete = async (idProduct) => {
        const res = await deleteApi('instock', idProduct);
        const reponse = await res.json();
        if (reponse.status !== 'OK') {
            return;
        } else {
            const newData = await getData();
            // setShow(false);
            setData(newData);
            setAlert({
                show: true,
                type: 'success',
                message: 'Xóa thành công',
            });
        }
    };
    return (
        <div className={style.wrapperTblPro}>
            {deleting && (
                <AlertWarning
                    handleDelete={handleDelete}
                    setDeleting={setDeleting}
                    selectedProductId={selectedProductRef.current}
                />
            )}
            {adding === true ? (
                <AddInstock
                    setAlert={setAlert}
                    setData={setData}
                    setAdding={setAdding}
                    selectedProduct={{
                        id: selectedProductRef.current.id,
                        TenSP: selectedProductRef.current.TenSP,
                        SoLuong: selectedProductRef.current.SoLuong,
                    }}
                />
            ) : null}
            {editting === true ? (
                <EditInstock
                    setAlert={setAlert}
                    setData={setData}
                    selectedProduct={{ ...selectedProductRef.current }}
                    setEditting={setEditting}
                />
            ) : null}
            <table border="1">
                <thead>
                    <tr>
                        <th>Tên sản phẩm</th>
                        <th>Size</th>
                        <th>Số lượng</th>
                        <th colSpan="2">Thao Tác</th>
                    </tr>
                </thead>
                {data.map((item) => {
                    return (
                        <tbody key={item.id}>
                            <tr>
                                <td rowSpan={item.ChiTiet.length + 2}>
                                    <div className={style.nameWrapper}>
                                        <span className={style.name}>{item.TenSP}</span>
                                        <span className={style.fullName}>{item.TenSP}</span>
                                    </div>
                                </td>
                                {item.ChiTiet.length === 0 && (
                                    <td colSpan="4">Sản phẩm chưa có số lượng</td>
                                )}
                            </tr>
                            {item.ChiTiet.map((instock) => {
                                return (
                                    <tr key={instock.id}>
                                        <td>{instock.Size}</td>
                                        <td>{instock.SoLuong}</td>
                                        <td>
                                            <button
                                                className={style.edit}
                                                onClick={() => {
                                                    handleUpdate();
                                                    selectedProductRef.current = {
                                                        id: item.id,
                                                        TenSP: item.TenSP,
                                                        instock: {
                                                            id: instock.id,
                                                            Size: instock.Size,
                                                            SoLuong: instock.SoLuong,
                                                        },
                                                    };
                                                }}
                                            >
                                                <FontAwesomeIcon icon={faPenToSquare} /> Sửa
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                className={style.delete}
                                                onClick={() => {
                                                    setDeleting(true);
                                                    selectedProductRef.current = instock.id;
                                                }}
                                            >
                                                <FontAwesomeIcon icon={faTrash} /> Xóa
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                            <tr>
                                <td
                                    className={style.addInstock}
                                    colSpan={5}
                                    onClick={() => {
                                        selectedProductRef.current = item;
                                        setAdding(true);
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
    );
}
export default InstockTable;
