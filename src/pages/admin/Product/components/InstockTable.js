import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import { faPenToSquare, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import style from './style.module.scss';
import AddInstock from './AddInstock';
import EditInstock from './EditInstock';
import { deleteApi } from '~/webService';
import AlertWarning from '~/components/infoModals/AlertWarning';
function InstockTable({ data, setData }) {
    const [adding, setAdding] = useState(false);
    const [editting, setEditting] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const selectedProductRef = useRef();
    const handleDelete = async (idProduct) => {
        const res = await deleteApi('instock', idProduct);
        const reponse = await res.json();
        console.log(reponse);
        const dataUpdate = data.map((item) => {
            const newInstock = item.SoLuong.filter((instock) => instock.id !== idProduct);
            return { ...item, SoLuong: [...newInstock] };
        });
        setData(dataUpdate);
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
                        <th colSpan="2">Hành động</th>
                    </tr>
                </thead>
                {data.map((item) => {
                    return (
                        <tbody key={item.id}>
                            <tr>
                                <td rowSpan={item.SoLuong.length + 2}>{item.TenSP}</td>
                                {item.SoLuong.length === 0 && (
                                    <td colSpan="4">Sản phẩm chưa có số lượng</td>
                                )}
                            </tr>
                            {item.SoLuong.map((instock) => {
                                return (
                                    <tr key={instock.id}>
                                        <td>{instock.Size}</td>
                                        <td>{instock.SoLuong}</td>
                                        <td>
                                            <button
                                                className={style.edit}
                                                onClick={() => {
                                                    setEditting(true);
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
                                    colSpan={5}
                                    onClick={() => {
                                        selectedProductRef.current = item;
                                        setAdding(true);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faPlus} />
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
