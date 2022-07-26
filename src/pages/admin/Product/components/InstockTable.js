import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import style from './style.module.scss';
import { deleteApi } from '~/webService';
import ModalEditProduct from './ModalEditProduct';
import AddInstock from './AddInstock';
function InstockTable({ data, setData }) {
    const [adding, setAdding] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [productEdit, setProductEdit] = useState({});
    const handleShowModalAdd = () => {
        setAdding(!adding);
    };
    const handleToggleShowModalEdit = (product) => {
        setShowEdit(!showEdit);
        return product;
    };

    const handleDelete = async (idProduct) => {};
    return (
        <div className={style.wrapperTblPro}>
            <h1></h1>
            <div className={style.wrapperBtn}>
                <button className={style.btnAdd} onClick={handleShowModalAdd}>
                    Thêm sản phẩm
                </button>
            </div>
            {adding === true ? (
                <AddInstock
                    setData={setData}
                    setShow={setAdding}
                    handleToggleModalAdd={handleShowModalAdd}
                />
            ) : null}
            {showEdit === true ? (
                <ModalEditProduct
                    setData={setData}
                    curentProduct={productEdit}
                    setShowEdit={setShowEdit}
                    handleToggleShowModalEdit={handleToggleShowModalEdit}
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
                <tbody>
                    {data.map((item) => {
                        return (
                            <>
                                <tr key={item.id}>
                                    <td rowSpan={item.SoLuong.length + 1}>{item.TenSP}</td>
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
                                                        handleToggleShowModalEdit();
                                                        setProductEdit(item);
                                                    }}
                                                >
                                                    <FontAwesomeIcon icon={faPenToSquare} /> Sửa
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    className={style.delete}
                                                    onClick={() => {
                                                        handleDelete(item.id);
                                                    }}
                                                >
                                                    <FontAwesomeIcon icon={faTrash} /> Xóa
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
export default InstockTable;
