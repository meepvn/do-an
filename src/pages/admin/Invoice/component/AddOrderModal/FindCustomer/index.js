import style from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { removeAccents } from '~/ultis';
import AlertWarning from '~/components/infoModals/AlertWarning';
import { useState, useMemo, useRef, useContext } from 'react';
import { orderContext } from '../../../index';

import SearchCustomer from './SearchCustomer';

function FindCustomer({ data }) {
    const { setAlert } = useContext(orderContext);
    const customer = useRef();
    const [filterValue, setFilterValue] = useState('');

    const filterdData = useMemo(() => {
        return data?.filter((item) => {
            const itemName = removeAccents(item.HoTen).toLowerCase();
            const findName = removeAccents(filterValue).toLowerCase();

            return itemName.includes(findName);
        });
    }, [filterValue, data]);
    const handleSaveCustomerId = (text) => {
        navigator.clipboard.writeText(text);
        setAlert({
            show: true,
            message: 'Đã lưu mã khách hàng',
            type: 'success',
        });
    };
    return (
        <div className={style.wrapper}>
            <div className={style.title}>Thông tin khách hàng</div>
            <div className={style.search}>
                <SearchCustomer
                    data={data}
                    setFilterValue={setFilterValue}
                    filterValue={filterValue}
                />
            </div>

            <div className={style.content}>
                <div className={style.wrapperTblPro}>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Mã KH</th>
                                <th>Họ tên </th>
                                <th>Số điện thoại</th>
                                <th>Địa chỉ</th>

                                <th>Thao Tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterdData?.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>
                                            <div className={style.nameWrapper}>
                                                <span>{item.HoTen}</span>
                                            </div>
                                        </td>

                                        <td>{item.SDT}</td>

                                        <td>{item.DiaChi}</td>
                                        <td>
                                            <span
                                                className={style.btnSave}
                                                onClick={() => handleSaveCustomerId(item.id)}
                                            >
                                                Lưu mã
                                            </span>
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

export default FindCustomer;
