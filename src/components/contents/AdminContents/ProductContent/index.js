import SearchBar from '~/components/SearchBar';
import { useState, useEffect, useMemo } from 'react';
function ProductContent() {
  const [filterValue, setFilterValue] = useState('');
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then((res) => res.json())
      .then(setData)
      .catch(console.log);
  }, []);

  const filterdData = useMemo(() => {
    return data.filter((item) => item.username.includes(filterValue));
  }, [filterValue, data]);

  return (
    <div className="content">
      <SearchBar setFilterValue={setFilterValue} />
      {filterdData.map((item, index) => (
        <div key={index}>{item.username}</div>
      ))}
    </div>
  );
}

export default ProductContent;
