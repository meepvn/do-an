import React from 'react';
import { Link } from 'react-router-dom';
import { LoginRegisterWrapper } from '../style';
const Login = () => {
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
                            placeholder="Tên đăng nhập"
                        />
                    </div>
                    <div className="content__form--group">
                        <input
                            type="password"
                            name="passwordLogin"
                            className="content__form--input"
                            placeholder="Mật khẩu"
                        />
                    </div>
                    <div className="content__form--group " id="btn">
                        <button className="btn" id="btn-submit">
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
