import React, { useEffect, useContext } from 'react';
import { SearchTermContext } from '../context/SearchTerm';

const Home = () => {
  const [, setSearchTerm] = useContext(SearchTermContext);
  useEffect(() => {
    setSearchTerm('');
  }, []);
  return <></>;
};

export default Home;
