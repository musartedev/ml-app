import React from 'react';

import Search from '../../../assets/img/icons/search.png';

const SearchBox = () => {
  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <form role="search" onSubmit={handleSubmit}>
      <input
        type="text"
        name="seartchTerm"
        placeholder="Nunca dejes de buscar..."
      />
      <button type="submit">
        <img src={Search} alt="Search" />
      </button>
    </form>
  );
};

export default SearchBox;
