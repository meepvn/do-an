import FindCustomer from './FindCustomer';
import React, { useState, useEffect } from 'react';
import style from './style.module.scss';
import AddOrder from './AddOrder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { getUsers } from '~/webService';

const AddOrderModal = ({ setAdding }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getUsers().then(setData).catch(console.log);
    }, []);
    return (
        <div className={style.wrapperAddOrder}>
            <div className={style.container}>
                <div className={style.title}>
                    <span>Tạo đơn hàng</span>
                    <span onClick={() => setAdding(false)}>
                        <FontAwesomeIcon icon={faClose} />
                    </span>
                </div>
                <div className={style.content}>
                    <div className={style.customer}>
                        <FindCustomer data={data} />
                    </div>
                    <div className={style.order}>
                        <AddOrder customers={data} setAdding={setAdding} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddOrderModal;
