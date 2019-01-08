import React from 'react';
import Loadable from 'react-loadable';
import styled from 'styled-components';
import Spinner from '../spin';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Loading = () => (<Wrapper><Spinner size="48px" /></Wrapper>);

export default function asyncComp(loader) {
  return Loadable({ loader, loading: Loading });
}
