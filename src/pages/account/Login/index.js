import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginRegisterWrapper } from '../style';
import { userApi } from '~/webService';
import useAuth from '~/hooks/useAuth';

const Login = () => {
    const [inputValue, setInputValue] = useState({
        TenTaiKhoan: '',
        MatKhau: '',
    });
    const auth = useAuth();
    const navigate = useNavigate();
    const handleSubmit = async () => {
        if (!inputValue.TenTaiKhoan || !inputValue.MatKhau) return;
        const response = await userApi('login', inputValue);
        const json = await response.json();
        console.log(json);
        if (json.status === 'OK') {
            auth.setState(true, json.token, json.info);
            navigate('/admin/product');
        }
    };
    return (
        <LoginRegisterWrapper>
            <div className="wrapper__form">
                <div className="head__form">
                    {/* <div className="img__logo"><img alt="1"></div> */}
                    <span> Đăng nhập</span>
                </div>
                {/* <div className="error__message hidden " id="err__login"></div> */}
                <div className="form__content" id="form__login">
                    <div className="content__form--group ">
                        <input
                            type="text"
                            name="usernameLogin"
                            className="content__form--input"
                            value={inputValue.TenTaiKhoan}
                            onChange={(e) =>
                                setInputValue({ ...inputValue, TenTaiKhoan: e.target.value })
                            }
                            placeholder="Tên đăng nhập"
                        />
                    </div>
                    <div className="content__form--group">
                        <input
                            type="password"
                            name="passwordLogin"
                            className="content__form--input"
                            value={inputValue.MatKhau}
                            onChange={(e) =>
                                setInputValue({ ...inputValue, MatKhau: e.target.value })
                            }
                            placeholder="Mật khẩu"
                        />
                    </div>
                    <div className="content__form--group " id="btn">
                        <button className="btn" id="btn-submit" onClick={handleSubmit}>
                            Đăng nhập
                        </button>
                    </div>
                    <div className="content__form--group form__footer">
                        <p>
                            Chưa có tài khoản?{' '}
                            <span className="switch__modal switch__modal-regis">
                                <Link to="/account/register">Đăng ký</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </LoginRegisterWrapper>
    );
};

export default Login;
