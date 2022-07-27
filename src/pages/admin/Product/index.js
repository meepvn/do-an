import style from './style.module.scss';
import AdminSearchBar from '~/components/searchBars/AdminSearchBar';
import ProductTable from './components/ProductTable';
import { removeAccents } from '~/ultis';
import { getData } from '~/webService';
import { useState, useEffect, useMemo } from 'react';
import InstockTable from './components/InstockTable';
function Product() {
    console.log('Re-render component');
    const [filterValue, setFilterValue] = useState('');
    const [data, setData] = useState([]);
    const [table, setTable] = useState('product');

    useEffect(() => {
        getData().then(setData).catch(console.log);
    }, []);
    const filterdData = useMemo(() => {
        return data.filter((item) =>
            removeAccents(item.TenSP).includes(removeAccents(filterValue)),
        );
    }, [filterValue, data]);

    return (
        <div className={style.wrapper}>
            <AdminSearchBar setFilterValue={setFilterValue} data={data} filterValue={filterValue} />
            <div className={style.content}>
                <div className={style.nav}>
                    <div>
                        <button
                            onClick={() => {
                                setTable('product');
                                setFilterValue('');
                            }}
                            className={table === 'product' ? style.active : null}
                        >
                            Sản phẩm
                        </button>
                        <button
                            onClick={() => {
                                setTable('instock');
                                setFilterValue('');
                            }}
                            className={table === 'instock' ? style.active : null}
                        >
                            Thông tin sản phẩm{' '}
                        </button>
                    </div>
                </div>
                {table === 'instock' && <InstockTable data={filterdData} setData={setData} />}
                {table === 'product' && (
                    <ProductTable
                        setFilterValue={setFilterValue}
                        data={filterdData}
                        setData={setData}
                        setTable={setTable}
                    />
                )}
            </div>
        </div>
    );
}

export default Product;
