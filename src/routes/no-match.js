import asyncComp from '@core/async-comp';

export default{
  component: asyncComp(() => import('../pages/no-match/NoMatch')),
};
