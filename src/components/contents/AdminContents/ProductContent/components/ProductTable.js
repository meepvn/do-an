import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import style from "./style.module.scss"
function ProductTable({data}){
    return(
        <table border='1'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Tên sản phẩm</th>
                <th>Loại sản phẩm</th>
                <th>Đối tượng khách hàng</th>
                <th>Đơn giá</th>
                <th>Khuyến mãi</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((item,index) =>{
                  return(
                    <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.TenSP}</td>
                    <td>{item.Loai}</td>
                    <td>{item.GioiTinh===0 ? "Nam":"Nữ"}</td>
                    <td>{item.DonGia}</td>
                    <td>{item.KhuyenMai}</td>
                    <td><button className={style.edit}><FontAwesomeIcon icon={faPenToSquare}/> Sửa</button></td>
                    <td><button className={style.delete}><FontAwesomeIcon icon={faTrash} /> Xóa</button></td>
                  </tr>
                  )
                })
              }
            </tbody>
          </table>
    )
}
export default ProductTable