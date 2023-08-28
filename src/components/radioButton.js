import React, {useState} from "react";

function RadioButton({ onSort }) {
    const [sortingOption, setSortingOption] = useState('default');

    const handleSortingChange = (e) => {
        setSortingOption(e.target.value);
      };

    const handleClickEvent = (e) => {
        onSort(e.target.value)
    }

  return(
    <>
     <div className="sorting-options">
        <label>
          <input
            type="radio"
            value="ascending"
            checked={sortingOption === 'ascending'}
            onChange={handleSortingChange}
            onClick={handleClickEvent}
          />
          Ascending
        </label>
        <label>
          <input
            type="radio"
            value="descending"
            checked={sortingOption === 'descending'}
            onChange={handleSortingChange}
            onClick={handleClickEvent}
          />
          Descending
        </label>
        <label>
          <input
            type="radio"
            value="default"
            checked={sortingOption === 'default'}
            onChange={handleSortingChange}
            onClick={handleClickEvent}
          />
          Default
        </label>
      </div>
    </>
  )
}

export default RadioButton;