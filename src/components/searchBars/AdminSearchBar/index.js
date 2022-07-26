import { useState } from 'react';
import style from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
function AdminSearchBar({ setFilterValue, data }) {
    const [inputValue, setInputValue] = useState('');
    const [showSuggest, setShowSuggest] = useState(false);
    const suggestData = data.filter((item) => item.TenSP.includes(inputValue));
    return (
        <div className={style.wrapperSearchBar}>
            <div className={style.searchBar}>
                <input
                    onChange={(e) => {
                        setShowSuggest(true);
                        setInputValue(e.target.value);
                    }}
                    value={inputValue}
                    placeholder="Nhập tên sản phẩm ..."
                />

                <button onClick={() => setFilterValue(inputValue)}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            {showSuggest && inputValue && (
                <div className={style.suggest}>
                    {suggestData.map((item) => {
                        return (
                            <div
                                className={style.suggestItem}
                                onClick={() => {
                                    setFilterValue(item.TenSP);
                                    setInputValue(item.TenSP);
                                    setShowSuggest(!showSuggest);
                                }}
                            >
                                {item.TenSP}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default AdminSearchBar;
