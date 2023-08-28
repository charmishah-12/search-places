import React, { useState, useEffect, useRef } from 'react';

function SearchBox({ onSearch, onSort }) {
  const [searchText, setSearchText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [sortingOption, setSortingOption] = useState('default');
  const inputRef = useRef(null);
  
  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(searchText);
      onSort(sortingOption)
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSortingChange = (e) => {
    setSortingOption(e.target.value);
  };

  useEffect(() => {

  const handleKeyDown = (e) => {
    if (e.key === '/') {
      e.preventDefault();
      inputRef.current.focus();
    }
  };
  window.addEventListener('keydown', handleKeyDown);
 })

  return (
    <div className={`search-box ${isFocused ? 'focused' : ''} ${isDisabled ? 'disabled' : ''}`}>
        <div className='input-container'>
      <input
        type="text"
        placeholder="Search places..."
        value={searchText}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={isDisabled}
        ref={inputRef}
      />
      <div className="shortcut">Ctrl + /</div>
   </div> 
    <div className="sorting-options">
        <label>
          <input
            type="radio"
            value="ascending"
            checked={sortingOption === 'ascending'}
            onChange={handleSortingChange}
          />
          Ascending
        </label>
        <label>
          <input
            type="radio"
            value="descending"
            checked={sortingOption === 'descending'}
            onChange={handleSortingChange}
          />
          Descending
        </label>
        <label>
          <input
            type="radio"
            value="default"
            checked={sortingOption === 'default'}
            onChange={handleSortingChange}
          />
          Default
        </label>
      </div>
   </div>
  );
}

export default SearchBox;
