import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import style from './style.module.scss';
const SliderIMG = ({ images }) => {
    const [currentIMG, setCurentIMG] = useState(0);

    return images.map((image, index) => {
        if (index !== currentIMG) return null;
        else
            return (
                <div className={style.wrapperSlider} key={index}>
                    <span
                        className={style.preBtn}
                        onClick={() => {
                            setCurentIMG(currentIMG === 0 ? images.length - 1 : currentIMG - 1);
                        }}
                    >
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} className={style.icon} />
                    </span>
                    <span
                        className={style.nextBtn}
                        onClick={() => {
                            setCurentIMG(currentIMG === images.length - 1 ? 0 : currentIMG + 1);
                        }}
                    >
                        <FontAwesomeIcon icon={faArrowAltCircleRight} className={style.icon} />
                    </span>
                    <div className={style.img}>
                        <img src={images[currentIMG]} alt="img" />
                    </div>
                </div>
            );
    });
};

export default SliderIMG;
