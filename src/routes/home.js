import asyncComp from '@core/async-comp';

const Homes = asyncComp(() => import('../pages/home/Home'));

export default [{
  exact: true,
  path: '/home',
  component: Homes,
}]