import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import Layout from '../containers/layout/Layout';

import homeRoutes from './home';
import uiElements from './ui-elements';

const routes = [
  ...homeRoutes,
  ...uiElements,
];

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
