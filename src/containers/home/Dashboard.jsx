import * as React from 'react';
import PropTypes from 'prop-types';

import ErrorBoundary from '../../components/feedback/ErrorBoundary';
import CardCarousel from '../../components/card-carousel';

import LineChart from './charts/LineChart';
import PieChart from './charts/PieChart';
import AreaChart from './charts/AreaChart';

class Dashboard extends React.PureComponent {
  state = {};

  render() {
    return (
      <CardCarousel trigger="hover" pageSize={1} cardTitle="数据预览" height={400} reconstruct>
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