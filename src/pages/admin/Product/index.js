import style from './style.module.scss';
import AdminSearchBar from '~/components/searchBars/AdminSearchBar';
import ProductTable from './components/ProductTable';
import AddInstock from './components/AddInstock';
import { getData } from '~/webService';
import { useState, useEffect, useMemo } from 'react';
import InstockTable from './components/InstockTable';
function Product() {
    const [filterValue, setFilterValue] = useState('');
    const [data, setData] = useState([]);
    const [table, setTable] = useState('product');
    const [addInstock, setAddInstock] = useState(false);
    const [instockEdit, setInstockEdit] = useState({});

    useEffect(() => {
        getData().then(setData).catch(console.log);
    }, [table]);
    const filterdData = useMemo(() => {
        return data.filter((item) => item.TenSP.includes(filterValue));
    }, [filterValue, data]);

    return (
        <div className={style.wrapper}>
            <AdminSearchBar setFilterValue={setFilterValue} />
            <div className={style.content}>
                <div className={style.nav}>
                    <div>
                        <button
                            onClick={() => setTable('product')}
                            className={table === 'product' ? style.active : null}
                        >
                            Sản phẩm
                        </button>
                        <button
                            onClick={() => setTable('instock')}
                            className={table === 'instock' ? style.active : null}
                        >
                            Thông tin sản phẩm{' '}
                        </button>
                    </div>
                </div>
                {addInstock && (
                    <AddInstock
                        setAddInstock={setAddInstock}
                        instockEdit={instockEdit}
                        setData={setData}
                    />
                )}
                {table === 'instock' && <InstockTable data={filterdData} setData={setData} />}
                {table === 'product' && (
                    <ProductTable
                        data={filterdData}
                        setData={setData}
                        setAddInstock={setAddInstock}
                        setInstockEdit={setInstockEdit}
                        setTable={setTable}
                    />
                )}
            </div>
        </div>
    );
}

export default Product;
