import lazyComp from '@core/lazy-comp';

export default [{
  exact: true,
  path: '/home',
  component: lazyComp(import('../pages/home/Home')),
}];
