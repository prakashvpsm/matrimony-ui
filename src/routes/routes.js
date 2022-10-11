import Login from '../pages/login';
import Home from '../pages/home/index';

const protectedRoutes = [];


const publicRoutes = [
  {
    path: 'login',
    component: <Login />,
    exact: true,
  },
  {
    path: '',
    component: <Home />,
    exact: true
  }
];

export {
  protectedRoutes,
  publicRoutes
};