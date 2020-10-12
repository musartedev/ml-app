import { useLocation } from 'react-router';

// Solution found at:
// https://medium.com/better-programming/using-url-parameters-and-query-strings-with-react-router-fffdcea7a8e9
export default () => {
  return new URLSearchParams(useLocation().search);
};
