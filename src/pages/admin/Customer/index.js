import style from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import AdminSearchBar from '~/components/searchBars/AdminSearchBar';
// import { removeAccents } from '~/ultis';
import { useState, useEffect, useMemo } from 'react';
import Alert from '~/components/infoModals/Alert';
import { getUsers } from '~/webService';

function Customer() {
    const [data, setData] = useState([]);
    const [alert, setAlert] = useState({
        show: false,
        message: '',
        type: '',
    });
    useEffect(() => {
        getUsers().then(setData).catch(console.log);
    }, []);
    console.log(data);
    // const filterdData = useMemo(() => {
    //     return products.filter((item) => {
    //         const itemName = removeAccents(item.TenSP).toLowerCase();
    //         const findName = removeAccents(filterValue).toLowerCase();
    //         const typeName = removeAccents(item.Loai).toLowerCase();
    //         return itemName.includes(findName) || typeName.includes(findName);
    //     });
    // }, [filterValue, products]);
    return (
        <div className={style.wrapper}>
            {alert.show && <Alert alert={alert} setAlert={setAlert} />}

            <div className={style.content}>
                <div className={style.wrapperTblPro}>
                    <div className={style.wrapperBtn}>
                        <button className={style.btnAdd}>Thêm khách hàng</button>
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
                                <th>Mã khách hàng</th>
                                <th>Họ tên </th>
                                <th>Số điện thoại</th>
                                <th>Địa chỉ</th>
                                <th>Email </th>
                                <th>Tên tài khoản</th>
                                <th colSpan="2">Thao Tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((item, index) => {
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

                                        <td>{item.DiaChi}</td>

                                        <td>{item.Email}</td>
                                        <td>{item.TenTaiKhoan}</td>
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
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Customer;
