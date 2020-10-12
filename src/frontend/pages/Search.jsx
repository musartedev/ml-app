import React, { useContext, useEffect, useState } from 'react';
import { searchItems } from '../api';
import ItemList from '../components/common/ItemList';
import Breadcrumb from '../components/common/Breadcrumb';
import useQuery from '../hooks/useQuery';
import { LoadingContext } from '../context/Loading';
import Loader from '../components/common/Loader';
import { SearchTermContext } from '../context/SearchTerm';

const Search = () => {
  const queryParams = useQuery();
  const [loading, setLoading] = useContext(LoadingContext);
  const [searchTerm, setSearchTerm] = useContext(SearchTermContext);
  const [searchResults, setSearchResults] = useState({ categories: [] });

  const fetchResults = async () => {
    setLoading(true);
    const response = await searchItems(queryParams.get('q'));
    setSearchResults(response);
    setLoading(false);
  };

  useEffect(() => {
    if (queryParams.get('q') !== searchTerm) {
      setSearchTerm(queryParams.get('q'));
    }
    setSearchResults(queryParams.get('q'));
    fetchResults();
  }, [queryParams.get('q')]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Breadcrumb categories={searchResults.categories} />
      <ItemList items={searchResults.items} />
    </>
  );
};

export default Search;
