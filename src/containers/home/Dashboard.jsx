import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ErrorBoundary from '../../components/feedback/ErrorBoundary';
import CardCarousel from '../../components/card-carousel';

import LineChart from './LineChart';
import PieChart from './PieChart';
import AreaChart from './AreaChart';

class Dashboard extends React.PureComponent {
  state = {};

  render() {
    return (
      <CardCarousel trigger="hover" pageSize={1} cardTitle="数据预览" height={400} isReconstruct>
        <AreaChart />
        <PieChart />
        <LineChart />
      </CardCarousel>
    );
  }
}

function ErrorWrapper(props) {
  return (<ErrorBoundary><Dashboard {...props} /></ErrorBoundary>);
}

export default ErrorWrapper;