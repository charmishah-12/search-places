import React, { useState, useEffect, useRef } from 'react';

function SearchBox({ onSearch }) {
  const [searchText, setSearchText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [sortOption, setSortOption] = useState('default');
  const inputRef = useRef(null);
  
  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(searchText);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.id);
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
   <div className='sorting'>
   <input type='radio' name='sort' id='ascending' checked={sortOption === 'ascending'}
          onChange={handleSortChange}/>
   <label htmlFor='ascending'>Ascending</label>
   <input type='radio' name='sort' id='decending' checked={sortOption === 'decending'}
          onChange={handleSortChange}/>
   <label htmlFor='decending'>decending</label>
   <input type='radio' name='sort' id='default' checked={sortOption === 'default'}
          onChange={handleSortChange}/>
   <label htmlFor='default'>default</label>
   </div>
   </div>
  );
}

export default SearchBox;
