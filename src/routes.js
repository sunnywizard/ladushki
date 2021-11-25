import App from './containers/app';
import My from './containers/my';
import Admin from './containers/admin';
// import Answ from './containers/questansw';
import Cyberweek from './containers/cyberweek';
import Site from './containers/site';

export default [
  {
    component: App,
    routes: [
      {
        path: '/my',
        component: My,
      },
      {
        path: '/admin',
        component: Admin,
      },
      // {
      //   path: '/questansw',
      //   component: Answ,
      // },
      {
        path: '/cyberweek',
        component: Cyberweek,
      },
      {
        path: '*',
        component: Site,
      },
    ],
  },
];
