import React from 'react';
import images from '~/assets/customerImages';
import style from './style.module.scss';
const Overview = () => {
    return (
        <div className={style.wrapperOverView}>
            <div className={style.title}>
                <div className={style.titleHeader}>SALE</div>
                <h1 className={style.titleContent}>
                    <span>sale lên đến 80%</span> <span>xả hàng lần cuối!</span>
                    <span> hàng mới về</span>
                </h1>
            </div>
            <div className={style.content}></div>
        </div>
    );
};

export default Overview;
