import lazyComp from '@core/lazy-comp';

export default [{
  path: '/ui-elements/buttons',
  component: lazyComp(import('../pages/ui-elements/Buttons')),
}];
