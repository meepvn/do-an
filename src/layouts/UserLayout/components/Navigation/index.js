import style from './style.module.scss'
import {Routes, Route} from 'react-router-dom'
function Navigation(){
    return (
        <div className={style.navWrapper}>
            <ul className={style.list}>
                <li className={style.item}>
                    <a href="#">Sale</a>
                </li>
                <li className={style.item}>
                    <a href="#">Quần áo</a>
                </li>
                <li className={style.item}>
                    <a href="#">Giày</a>
                </li>
                <li className={style.item}>
                    <a href="#">Đồ thể thao</a>
                </li>
                <li className={style.item}>
                    <a href="#">Phụ kiện</a>
                </li>
                <li className={style.item}>
                    <a href="#">Trending hiện tại</a>
                </li>
            </ul>
        </div>
    )
}
export default Navigation