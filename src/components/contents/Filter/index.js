import style from './style.module.scss';
const Filter = ({ data, setFilterOptions, filterOptions }) => {
    console.log(filterOptions);
    return (
        <div className={style.wrapperFilter}>
            <div>
                <h3>Lọc sản phẩm</h3>
            </div>
            <div>
                <h5>Đối tượng</h5>
                <input
                    type="checkbox"
                    checked={1 === filterOptions.gender}
                    onChange={(e) => setFilterOptions({ ...filterOptions, gender: 1 })}
                />
                Nam
                <input
                    type="checkbox"
                    checked={2 === filterOptions.gender}
                    onChange={(e) => setFilterOptions({ ...filterOptions, gender: 2 })}
                />
                Nữ
                <input
                    type="checkbox"
                    checked={3 === filterOptions.gender}
                    onChange={(e) => setFilterOptions({ ...filterOptions, gender: 3 })}
                />
                Unisex
            </div>
            <div>
                <h5>Loại sản phẩm</h5>
                {data?.map((productType) => {
                    return (
                        <div key={productType}>
                            <input
                                type="checkbox"
                                value={productType}
                                checked={filterOptions.type === productType}
                                onChange={(e) => {
                                    setFilterOptions({ ...filterOptions, type: e.target.value });
                                }}
                            />
                            {productType}
                        </div>
                    );
                })}
            </div>
            <div>
                <h5>Lọc theo giá</h5>
                <input
                    type="checkbox"
                    checked={100000 === filterOptions.price}
                    onChange={(e) => setFilterOptions({ ...filterOptions, price: 100000 })}
                />
                Dưới 100.000 đ
                <input
                    type="checkbox"
                    checked={500000 === filterOptions.price}
                    onChange={(e) => setFilterOptions({ ...filterOptions, price: 500000 })}
                />
                Dưới 500.000 đ
                <input
                    type="checkbox"
                    checked={1000000 === filterOptions.price}
                    onChange={(e) => setFilterOptions({ ...filterOptions, price: 1000000 })}
                />
                Dưới 1.000.000 đ
            </div>
        </div>
    );
};

export default Filter;
