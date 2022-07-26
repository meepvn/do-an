import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faPenToSquare, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import style from './style.module.scss';
// import ModalAdd from './ModalAdd';
import { deleteApi } from '~/webService';
// import ModalEditProduct from './ModalEditProduct';
function CustomerTable(props) {
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [productEdit, setProductEdit] = useState({});
    const handleToggleModalAdd = () => {
        setShow(!show);
    };
    const handleToggleShowModalEdit = (product) => {
        setShowEdit(!showEdit);
        return product;
    };

    const handleDelete = async (idProduct) => {
        const copyData = props.data;
        try {
            const res = await deleteApi(props.link, idProduct);
            const reponse = await res.json();
            console.log(reponse);
            const test = copyData.filter((item) => item.id !== idProduct);
            console.log('test data', test);
            props.setData(test);
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <div className={style.wrapperTblPro}>
            <div className={style.wrapperBtn}>
                <button className={style.btnAdd} onClick={handleToggleModalAdd}>
                    Thêm khách hàng
                </button>
            </div>
            {/* {show === true ? (
                <ModalAdd
                    setData={props.setData}
                    setShow={setShow}
                    link={props.link}
                    handleToggleModalAdd={handleToggleModalAdd}
                />
            ) : null}
            {showEdit === true ? (
                <ModalEditProduct
                    setData={props.setData}
                    curentProduct={productEdit}
                    setShowEdit={setShowEdit}
                    link={props.link}
                    handleToggleShowModalEdit={handleToggleShowModalEdit}
                />
            ) : null} */}
            <table border="1">
                <thead>
                    <tr>
                        <th>Tên khách hàng</th>
                        <th>SĐT</th>
                        <th>Địa chỉ</th>
                        <th>Email</th>
                        <th>Tài khoản</th>
                        <th colSpan="3">Hành động</th>
                    </tr>
                </thead>
                {/* <tbody>
                    {props.data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.TenSP}</td>
                                <td>{item.Loai}</td>
                                <td>{item.GioiTinh === 0 ? 'Nam' : 'Nữ'}</td>
                                <td>{item.DonGia}</td>
                                <td>{item.KhuyenMai}</td>
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
                                <td>
                                    <button
                                        className={style.edit}
                                        onClick={() => {
                                            props.setTable('instock');
                                            props.setAddInstock(true);
                                            props.setInstockEdit(item);
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faPlus} />
                                        Thêm số lượng
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody> */}
            </table>
        </div>
    );
}
export default CustomerTable;
