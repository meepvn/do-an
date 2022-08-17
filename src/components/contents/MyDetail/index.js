import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import useAuth from '~/hooks/useAuth';
import style from './style.module.scss';
const MyDetail = () => {
    const [inputValue, setInputValue] = useState({
        HoTen: '',
        SDT: '',
        DiaChi: '',
    });
    const auth = useAuth();
    useEffect(() => {
        const Option = {
            headers: { 'Content-Type': 'application/json', token: auth.token },
        };
        (async () => {
            const res = await fetch(`http://localhost:3100/api/user/personal`, Option);
            const json = await res.json();
            setInputValue(json.user);
        })();
    }, [auth.token]);

    const handleUpdate = () => {
        const Option = {
            method: 'PUT',
            body: JSON.stringify(inputValue),
            headers: { 'Content-Type': 'application/json', token: auth.token },
        };
        console.log(inputValue);
        fetch(`http://localhost:3100/api/user/personal`, Option)
            .then((res) => res.json())
            .then((json) => console.log(json));
    };

    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <FontAwesomeIcon icon={faAddressCard} className={style.icon} />
                <h2>Thông tin cá nhân</h2>
            </div>
            <div className={style.form}>
                <div className={style.inputGroup}>
                    <label>Họ Tên </label>
                    <input
                        type="text"
                        placeholder="Họ tên ..."
                        value={inputValue.HoTen}
                        onChange={(e) => setInputValue({ ...inputValue, HoTen: e.target.value })}
                    />
                </div>
                <div className={style.inputGroup}>
                    <label>Số điện thoại </label>
                    <input
                        type="text"
                        placeholder="Số điện thoại ..."
                        value={inputValue.SDT}
                        onChange={(e) => setInputValue({ ...inputValue, SDT: e.target.value })}
                    />
                </div>
                <div className={style.inputGroup}>
                    <label>Địa chỉ </label>
                    <input
                        type="text"
                        placeholder="Địa chỉ ..."
                        value={inputValue.DiaChi}
                        onChange={(e) => setInputValue({ ...inputValue, DiaChi: e.target.value })}
                    />
                </div>
                <div className={style.btnSubmit} id={style.change}>
                    <button onClick={handleUpdate}>Lưu thay đổi</button>
                </div>
            </div>
        </div>
    );
};

export default MyDetail;
