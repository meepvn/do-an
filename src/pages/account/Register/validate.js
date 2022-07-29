import { validator } from '~/ultis';

export default function validate(inputValue) {
    if (
        !inputValue.HoTen ||
        !inputValue.SDT ||
        !inputValue.DiaChi ||
        !inputValue.Email ||
        !inputValue.TenTaiKhoan ||
        !inputValue.MatKhau ||
        !inputValue.NhapLaiMatKhau
    ) {
        alert('Không để trống');
        return false;
    }
    if (!validator.name(inputValue.HoTen)) {
        alert('Họ tên không hợp lệ');
        return false;
    }
    if (!validator.phone(inputValue.SDT)) {
        alert('SDT khong hop le');
        return false;
    }
    if (!validator.email(inputValue.Email)) {
        alert('Email khong hop le');
        return false;
    }
    if (!validator.username(inputValue.TenTaiKhoan)) {
        alert('Tai khoan khong hop le');
        return false;
    }
    if (inputValue.MatKhau !== inputValue.NhapLaiMatKhau) {
        alert('Nhap lai mat khau khong trung');
        return false;
    }
    return true;
}
