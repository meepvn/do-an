import SearchBar from '~/components/SearchBar';
import style from './style.module.scss'
import ProductTable from './components/ProductTable';

import { useState,useEffect,useMemo } from 'react';
import InstockTable from './components/InstockTable';
function ProductContent() {
  const [filterValue, setFilterValue] = useState('');
  const [data, setData] = useState([]);
  const [table,setTable] =useState('product');
  
  useEffect(() => {
    fetch(`http://localhost:3100/api/${table}`)
      .then((res) => res.json())
      .then(setData)
      .catch(console.log);
  }, [table]);

  const filterdData = useMemo(() => {
    return data.filter((item) => item.TenSP.includes(filterValue));
  }, [filterValue, data]);

  return (
    <div className={style.wrapper}>
      <SearchBar setFilterValue={setFilterValue} />
        <div className={style.content}>
          <div className={style.nav}>
              <button onClick={()=>setTable("product")}>Thông tin sản phẩm</button>
              <button  onClick={()=>setTable("instock")}>Số lượng</button>
          </div>
          {
            table ==='instock'&& <InstockTable data={filterdData}/>  
          }{
            table==='product'&&<ProductTable data={filterdData}/>
          }

        </div>
        
    </div>
  );
}

export default ProductContent;
