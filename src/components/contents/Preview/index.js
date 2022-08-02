import style from './style.module.scss';
import images from '~/assets/images';
import { formatMoney } from '~/ultis';
const Preview = ({ title, data }) => {
    const { dataTest } = images;
    data = [
        {
            id: 1,
            TenSP: 'QUẦN JEANS NAM PHONG CÁCH ĐƯỜNG PHỐ MẠNH MẼ',
            Gia: 500000,
            KhuyenMai: 20,
            Anh: dataTest.quan1,
        },
        { id: 2, TenSP: 'quan jean', Gia: 500000, KhuyenMai: 2, Anh: dataTest.quan2 },
        { id: 3, TenSP: 'quan jean', Gia: 500000, KhuyenMai: 20, Anh: dataTest.quan3 },
        { id: 4, TenSP: 'quan jean', Gia: 500000, KhuyenMai: 20, Anh: dataTest.quanJean1 },
        { id: 5, TenSP: 'quan jean', Gia: 500000, KhuyenMai: 20, Anh: dataTest.quanJean1 },
    ];

    const content = 'sale lên đến 80% xả hàng lần cuối!';

    return (
        <div className={style.wrapperPreview}>
            <div className={style.title}>
                <div className={style.titleHeader}>{title}</div>
                <h1 className={style.titleContent}>
                    <span>{content}</span>
                </h1>
            </div>

            <div className={style.content}>
                {data.map((item) => {
                    return (
                        <div className={style.itemContent} key={item.id}>
                            <div className={style.img}>
                                <img src={item.Anh} alt="aa" />
                                <span className={style.discount}>-{item.KhuyenMai}%</span>
                            </div>
                            <div className={style.itemInfo}>
                                <span className={style.name}>{item.TenSP}</span>
                                <p className={style.price}>
                                    <span>{formatMoney(item.Gia, ' ')} </span>
                                    <span>
                                        {formatMoney(
                                            item.Gia - (item.Gia * item.KhuyenMai) / 100,
                                            'đ',
                                        )}
                                    </span>
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <button className={style.btnView}>Xem tất cả sản phẩm</button>
        </div>
    );
};

export default Preview;
