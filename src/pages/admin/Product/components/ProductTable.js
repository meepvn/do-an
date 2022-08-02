import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import { faPenToSquare, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { formatMoney } from '~/ultis';
import style from './style.module.scss';
import ModalAddProduct from './ModalAddProduct';
import { deleteApi, getData } from '~/webService';
import ModalEditProduct from './ModalEditProduct';
import AlertWarning from '~/components/infoModals/AlertWarning';
function ProductTable(props) {
    const { setAlert } = props;
    const [deleting, setDeleting] = useState(false);
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const selectedProductRef = useRef();
    const handleToggleModalAdd = () => {
        setShow(!show);
    };

    const handleDelete = async (idProduct) => {
        try {
            const res = await deleteApi('product', idProduct);
            await res.json();
            const newData = await getData();
            props.setData(newData);
            setAlert({
                show: true,
                message: 'Xóa thành công',
                type: 'success',
            });
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <div className={style.wrapperTblPro}>
            <div className={style.wrapperBtn}>
                <button className={style.btnAdd} onClick={handleToggleModalAdd}>
                    Thêm sản phẩm
                </button>
            </div>
            {deleting && (
                <AlertWarning
                    setDeleting={setDeleting}
                    handleDelete={handleDelete}
                    selectedProductId={selectedProductRef.current.id}
                />
            )}
            {show === true ? (
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
            ) : null}
            <table border="1">
                <thead>
                    <tr>
                        <th>Tên sản phẩm</th>
                        <th>Ảnh</th>
                        <th>Loại sản phẩm</th>
                        <th>Đối tượng </th>
                        <th>Đơn giá</th>
                        <th>Khuyến mãi</th>
                        <th colSpan="3">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    <div className={style.nameWrapper}>
                                        <span className={style.name}>{item.TenSP}</span>
                                        <span className={style.fullName}>{item.TenSP}</span>
                                    </div>
                                </td>
                                <td>
                                    <div className={style.imgWrapper}>
                                        <img
                                            src={`http://localhost:3100/images/${item.TenAnh}`}
                                            alt="img"
                                        />
                                    </div>
                                </td>
                                <td>{item.Loai}</td>
                                <td>
                                    {item.GioiTinh === 1
                                        ? 'Nam'
                                        : item.GioiTinh === 2
                                        ? 'Nữ'
                                        : 'Unisex'}
                                </td>
                                <td>{formatMoney(item.DonGia, ' vnđ')}</td>
                                <td>{item.KhuyenMai}%</td>
                                <td>
                                    <button
                                        className={style.edit}
                                        onClick={() => {
                                            selectedProductRef.current = item;
                                            setShowEdit(true);
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faPenToSquare} /> Sửa
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className={style.delete}
                                        onClick={() => {
                                            selectedProductRef.current = item;
                                            setDeleting(true);
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faTrash} /> Xóa
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className={style.edit}
                                        onClick={() => {
                                            props.setFilterValue(item.TenSP);
                                            props.setTable('instock');
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faPlus} />
                                        Xem số lượng
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
export default ProductTable;
