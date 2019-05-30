import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import Layout from '../containers/layout/Layout';

import noMatchRoute from './no-match';
import homeRoutes from './home';
import uiElementsRoutes from './ui-elements';

const routes = [
  ...homeRoutes,
  ...uiElementsRoutes,
];

// 添加 404 页面
routes.push(noMatchRoute);

const Wrapper = styled.div`
  height: 100%;
`;

function Router() {
  return (
    <Wrapper>
      <Layout routes={routes.map((route, idx) => (<Route key={idx} {...route} />))} />
    </Wrapper>
  );
}

export default Router;
