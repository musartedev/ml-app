import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Search from '../pages/Search';

const ROUTES = [
  {
    path: ['/'],
    key: 'HOME',
    exact: true,
    component: Home,
    auth: false,
  },
  {
    path: ['/search'],
    key: 'SEARCH',
    exact: true,
    component: Search,
    auth: false,
  },
  {
    name: 'Not Found',
    key: 'NOT FOUND',
    component: NotFound,
  },
];

export default ROUTES;
