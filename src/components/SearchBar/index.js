import { useState } from 'react';
import style from './style.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
function SearchBar({ setFilterValue }) {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className={style.searchBar}>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="Nhập tên sản phẩm ..."
      />
      <button  onClick={() => setFilterValue(inputValue)}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
    </div>
  );
}

export default SearchBar;
