import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { LoadingContext } from '../context/Loading';
import Breadcrumb from '../components/common/Breadcrumb';
import Item from '../components/common/Item';
import Loader from '../components/common/Loader';
import { getItemDetails } from '../api';

const ItemDetail = () => {
  const [item, setItem] = useState({});
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useContext(LoadingContext);
  const { id } = useParams();

  const fetchItem = async () => {
    setLoading(true);
    const {
      item: { categories: categoriesResponse, ...itemResponse },
    } = await getItemDetails(id);

    setItem(itemResponse);
    setCategories(categoriesResponse);
    setLoading(false);
  };

  useEffect(() => {
    fetchItem(id);
  }, [id]);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Breadcrumb categories={categories} />
      <Item item={item} />
    </>
  );
};

export default ItemDetail;
