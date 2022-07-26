import style from './style.module.scss'
function Footer(){
    return (
        <div className={style.wrapperFooter}>
            <div className={style.contact}></div>
            <div className={style.footerContent}>
                <div className={style.item}>
                    <h4>TRỢ GIÚP & THÔNG TIN</h4>
                    <ul>
                        <li className={style.list}>Trợ giúo</li>
                        <li className={style.list}>Theo dõi thứ tự</li>
                        <li className={style.list}>Giao hàng & Trả hàng</li>
                    </ul>
                </div>

                <div className={style.item}>
                    <h4>VỀ ASOS</h4>
                    <ul>
                        <li className={style.list}>Về chúng tôi</li>
                        <li className={style.list}>Việc làm tại ASOS</li>
                        <li className={style.list}>Cùng chịu trách nhiệm</li>
                        <li className={style.list}>Trang web của nhà đầu tư</li>
                    </ul>
                </div>

                <div className={style.item}>
                    <h4>THÊM TỪ ASOS</h4>
                    <ul>
                        <li className={style.list}>Ứng dụng di động</li>
                        <li className={style.list}>Thị trường của ASOS</li>
                        <li className={style.list}>Phiếu quà tặng</li>
                        <li className={style.list}>Black Friday</li>
                        <li className={style.list}>ASOS x Thrift+</li>
                    </ul>
                </div>

                <div className={style.item}>
                    <h4>SHOPPING FROM:</h4>
                    <ul>
                        <li className={style.list}>Bạn đang ở:</li>
                    </ul>
                </div>
            </div>
            <div className={style.theEnd}></div>
        </div>
    )
}
export default Footer;