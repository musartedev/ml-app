import Home from '../pages/Home';
import ItemDetail from '../pages/ItemDetail';
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
    path: ['/items/:id'],
    key: 'ITEMS',
    exact: true,
    component: ItemDetail,
    auth: false,
  },
  {
    name: 'Not Found',
    key: 'NOT FOUND',
    component: NotFound,
  },
];

export default ROUTES;
