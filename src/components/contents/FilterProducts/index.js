import React from 'react';
import style from './style.module.scss';
const FilterProducts = ({ types, setFilterOptions, filterOptions }) => {
    return (
        <div className={style.wrapperFilter}>
            <h4>Loại sản phẩm</h4>
            {types?.map((item, index) => {
                return (
                    <div className={style.filterItem} key={index}>
                        <label>
                            <input
                                type="checkbox"
                                checked={item === filterOptions.Loai}
                                onChange={(e) => {
                                    if (filterOptions.Loai === e.target.value)
                                        setFilterOptions({ ...filterOptions, Loai: '' });
                                    else
                                        setFilterOptions({
                                            ...filterOptions,
                                            Loai: e.target.value,
                                        });
                                }}
                                value={item}
                            />
                            <span>{item}</span>
                        </label>
                    </div>
                );
            })}
        </div>
    );
};

export default FilterProducts;
