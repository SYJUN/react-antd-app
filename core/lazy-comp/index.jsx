import React, { Suspense, lazy } from 'react';
import styled from 'styled-components';
import Spinner from '../spin';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Loading = () => <Wrapper><Spinner size="48px" /></Wrapper>;

export default function lazyComponent(importComp) {
  const Component = lazy(() => importComp);
  return props => (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
}