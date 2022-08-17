import style from './style.module.scss';
// import { removeAccents } from '~/ultis';
import { getInvoice } from '~/webService';
import { useState, useEffect, createContext } from 'react';
import Alert from '~/components/infoModals/Alert';
import InvoiceTable from './component/InvoiceTable';
import InvoiceDetailTable from './component/InvoiceDetailTable';

export const orderContext = createContext();
function Invoice() {
    // const [filterValue, setFilterValue] = useState('');
    const [data, setData] = useState([]);
    const [table, setTable] = useState('invoice');
    const [alert, setAlert] = useState({
        show: false,
        message: '',
        type: '',
    });

    // const { products = [], types: productTypes = [] } = data;
    useEffect(() => {
        getInvoice().then(setData).catch(console.log);
    }, []);
    // const filterdData = useMemo(() => {
    //     return products.filter((item) => {
    //         const itemName = removeAccents(item.TenSP).toLowerCase();
    //         const findName = removeAccents(filterValue).toLowerCase();
    //         const typeName = removeAccents(item.Loai).toLowerCase();
    //         return itemName.includes(findName) || typeName.includes(findName);
    //     });
    // }, [filterValue, products]);
    return (
        <orderContext.Provider
            value={{
                setData,
                setAlert,
            }}
        >
            <div className={style.wrapper}>
                {alert.show && <Alert alert={alert} setAlert={setAlert} />}
                {/* <AdminSearchBar
                setFilterValue={setFilterValue}
                data={products}
                filterValue={filterValue}
            /> */}
                <div className={style.content}>
                    <div className={style.nav}>
                        <div>
                            <button
                                onClick={() => {
                                    setTable('invoice');
                                    // setFilterValue('');
                                }}
                                className={table === 'invoice' ? style.active : null}
                            >
                                Đơn hàng
                            </button>
                            <button
                                onClick={() => {
                                    setTable('invoiceDetail');
                                    // setFilterValue('');
                                }}
                                className={table === 'invoiceDetail' ? style.active : null}
                            >
                                Chi tiết đơn hàng{' '}
                            </button>
                        </div>
                    </div>
                    {table === 'invoice' && (
                        <InvoiceTable data={data} setData={setData} setAlert={setAlert} />
                    )}
                    {table === 'invoiceDetail' && (
                        <InvoiceDetailTable data={data} setData={setData} setAlert={setAlert} />
                    )}
                    {/* {table === 'product' && (
                    <ProductTable
                        setAlert={setAlert}
                        setFilterValue={setFilterValue}
                        data={filterdData}
                        productTypes={productTypes}
                        setData={setData}
                        setTable={setTable}
                    />
                )} */}
                </div>
            </div>
        </orderContext.Provider>
    );
}

export default Invoice;
