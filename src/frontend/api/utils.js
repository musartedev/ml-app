/* eslint-disable camelcase */
/**
 * Handle successful API response
 * @param {Object} data
 */
export const handleSuccess = data => data;

/**
 * Handle failure API response
 *
 * TODO: Show error to the user or try again
 *
 * @param {Object} err
 */
export const handleFailure = err => console.log(err);

export const formatPrice = (price = {}) => {
  // This would print 'ARS', that's why it's commented
  // const currency = price.currency;

  // Instead, we'll use '$'
  const currency = '$';

  return `${currency} ${price.amount}${
    price.decimals > 0.0 ? `.${price.decimals}` : ''
  }`;
};

export const formatItem = item => ({
  ...item,
  price: formatPrice(item.price),
});

export const formatItems = (items = []) => items.map(item => formatItem(item));
