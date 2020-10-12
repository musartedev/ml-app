/* eslint-disable prefer-destructuring */
import axios from 'axios';
import { formatItem, formatItems, handleFailure, handleSuccess } from './utils';

const API_BASE_URL = process.env.API_BASE_URL;
const RESULTS_LIMIT = process.env.RESULTS_LIMIT || 4;

const mlApi = axios.create({
  baseURL: API_BASE_URL,
});

/**
 * Returns the first 4 items that matches with the query
 * @param {String} query
 */
export const searchItems = async query => {
  try {
    const {
      data: { categories, items },
    } = await mlApi.get('/search', {
      params: { q: query, limit: RESULTS_LIMIT },
    });

    const result = { categories, items: formatItems(items) };
    return handleSuccess(result);
  } catch (err) {
    return handleFailure(err);
  }
};

/**
 * Returns details of an specific item
 * @param {String} id
 */
export const getItemDetails = async id => {
  try {
    const {
      data: { item },
    } = await mlApi.get(`/items/${id}`);
    return handleSuccess({ item: formatItem(item) });
  } catch (err) {
    return handleFailure(err);
  }
};
