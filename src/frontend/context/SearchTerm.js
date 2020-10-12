import React, { useState, createContext } from 'react';

export const SearchTermContext = createContext([]);

export const SearchTermContextProvider = ({ children }) => {
  const [searchTermContext, setSearchTermContext] = useState([]);

  return (
    <SearchTermContext.Provider
      value={[searchTermContext, setSearchTermContext]}
    >
      {children}
    </SearchTermContext.Provider>
  );
};
