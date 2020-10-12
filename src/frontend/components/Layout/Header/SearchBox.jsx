import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { SearchTermContext } from '../../../context/SearchTerm';

import Search from '../../../assets/img/icons/search.png';

const SearchBox = () => {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useContext(SearchTermContext);

  const handleSubmit = event => {
    event.preventDefault();

    history.push(`/search?q=${searchTerm}`);
  };

  return (
    <form role="search" onSubmit={handleSubmit}>
      <input
        type="text"
        name="seartchTerm"
        placeholder="Nunca dejes de buscar..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button type="submit">
        <img src={Search} alt="Search" />
      </button>
    </form>
  );
};

export default SearchBox;
