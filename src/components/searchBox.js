import React, { useState, useEffect, useRef } from 'react';

function SearchBox({ onSearch }) {
  const [searchText, setSearchText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
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
   </div>
  );
}

export default SearchBox;
