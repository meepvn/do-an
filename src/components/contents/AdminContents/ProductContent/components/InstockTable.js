import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import style from "./style.module.scss"
function InstockTable({data}){

    
    
    return(
        <table border='1'>
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên sản phẩm</th>
                <th>Size</th>
                <th>Số lượng</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((item,index) =>{
                  return(
                    <tr key={index}>
                    <td>1</td>
                    <td>{item.TenSP}</td>
                    <td>{item.Size}</td>
                    <td>{item.SoLuong}</td>
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
export default InstockTable