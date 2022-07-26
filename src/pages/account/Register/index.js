import { Link } from 'react-router-dom';
import { LoginRegisterWrapper } from '../style';
function Register() {
    return (
        <LoginRegisterWrapper>
            <div className="wrapper__form">
                <div className="head__form">
                    <span> Đăng ký</span>
                </div>
                {/* <div className="error__message  hidden " id="err__regis"></div> */}
                <div className="form__content" id="form__regis">
                    <div className="content__form--group">
                        <input
                            type="text"
                            name="name"
                            className="content__form--input"
                            placeholder="Họ và tên ..."
                        />
                    </div>
                    <div className="content__form--group">
                        <input
                            type="text"
                            name="phone"
                            className="content__form--input"
                            placeholder="Số điện thoại ..."
                        />
                    </div>
                    <div className="content__form--group">
                        <input
                            type="email"
                            name="phone"
                            className="content__form--input"
                            placeholder="Email ..."
                        />
                    </div>
                    <div className="content__form--group ">
                        <input
                            type="text"
                            name="username"
                            className="content__form--input"
                            placeholder="Tên đăng nhập ..."
                        />
                    </div>
                    <div className="content__form--group">
                        <input
                            type="password"
                            name="password"
                            className="content__form--input"
                            placeholder="Mật khẩu ..."
                        />
                    </div>
                    <div className="content__form--group">
                        <input
                            type="password"
                            name="repassword"
                            className="content__form--input"
                            placeholder="Nhập lại mật khẩu ..."
                        />
                    </div>
                    <div className="content__form--group " id="btn">
                        <button className="btn " id="btn-submit">
                            Đăng ký
                        </button>
                    </div>
                    <div className="content__form--group form__footer">
                        <p>
                            Đã có tài khoản{' '}
                            <span className="switch__modal switch__modal-login">
                                <Link to="/account/login">Đăng nhập</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </LoginRegisterWrapper>
    );
}
export default Register;
