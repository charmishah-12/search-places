import React from 'react';

function Table({ data, loading }) {
  if (loading) {
    return <div className="spinner">Loading...</div>;
  }

  if (!data) {
    return <div className="no-result">Start searching</div>;
  }

  if (data.length === 0) {
    return <div className="no-result">No results found</div>;
  }

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>#</th>
          <th>Place Name</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>
              <img
                src={`https://flagsapi.com/${item.countryCode.toUpperCase()}/flat/64.png`}
                alt={`${item.countryCode} flag`}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
