import images from "~/assets/images"
import style from "./style.module.scss"
function HomeContent(){
    return(
        <div className={style.wrapperHome}>
            <div className={style.nav}>
                    <button>SHOP NỮ</button>
                    <div className={style.text}>
                        <p>Giảm giá lên đến 80% cho mọi sản phẩm</p>
                        <p>Giảm giá lớn nhất trong mùa hè</p>
                    </div>
                    <button>SHOP NAM</button>
            </div>
           <div className={style.img}>
                <img src={images.homeImage} alt="Home"/>
                <div className={style.content}>
                <h1>THIS IS ASOS</h1>
                 <p>ASOS DESIGN and 850+ brands</p>
           </div>
           <div className={style.description}>
            
           </div>
           </div>
           
           
        </div>
    )
}
export default HomeContent