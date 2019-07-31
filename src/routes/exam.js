import lazyComp from '@core/lazy-comp';

export default [
  {
    path: '/exam/computer',
    component: lazyComp(import('../pages/exam/Computer')),
  },
  {
    path: '/exam/english',
    component: lazyComp(import('../pages/exam/English')),
  },
];
