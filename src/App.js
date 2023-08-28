import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import SearchBox from './components/searchBox';
import Table from './components/table';
import Pagination from './components/pagination';

const API_KEY = '4ac5e3352fmshe6ac515ca3b8ccap1f0045jsnf0a504a87bbe';

function App() {
  const [searchText, setSearchText] = useState('');
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [sortOrder, setSortOrder] = useState('default');
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    if (searchText) {
      setLoading(true);
      axios
        .get('https://wft-geo-db.p.rapidapi.com/v1/geo/cities', {
          params: {
            countryIds: 'IN',
            namePrefix: searchText,
            limit,
            offset: limit*(currentPage - 1) ,
            sort: 'decending', 
          },
          headers: {
            'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
            'x-rapidapi-key': API_KEY,
          },
        })
        .then((response) => {
          const { data } = response;
          console.log("data of API",data)
          setCities(data.data);
          setTotalPages(Math.ceil(data.metadata.totalCount / limit ));
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    } else {
      setCities([]);
      setTotalPages(0);
    }
  }, [searchText, limit, currentPage, sortOrder]);

  const handlePageChange = (page) => {
    setCurrentPage(page);

  };
  const handleSortChange = (sortOption) => {
    setSortOrder(sortOption);
  };

  return (
    <div className="app">
      <h1>Search your destination to enjoy the journey!</h1>
      <SearchBox onSearch={(text) => setSearchText(text)} onSort={handleSortChange}/>
      <Table data={cities} loading={loading} />
      {totalPages > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default App;
