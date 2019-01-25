import * as React from 'react';
import PropTypes from 'prop-types';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
import DataSet from '@antv/data-set';

import ErrorBoundary from '../../../components/feedback/ErrorBoundary';

const list = [
  { id: 1, pv: 320, download: 204, average_pv: 300, month: '一月' },
  { id: 2, pv: 540, download: 642, average_pv: 423, month: '二月' },
  { id: 3, pv: 654, download: 344, average_pv: 266, month: '三月' },
  { id: 4, pv: 769, download: 345, average_pv: 643, month: '四月' },
  { id: 5, pv: 907, download: 568, average_pv: 745, month: '五月' },
  { id: 6, pv: 975, download: 423, average_pv: 765, month: '六月' },
  { id: 7, pv: 2351, download: 654, average_pv: 867, month: '七月' },
  { id: 8, pv: 634, download: 234, average_pv: 300, month: '八月' },
  { id: 9, pv: 765, download: 674, average_pv: 546, month: '九月' },
  { id: 10, pv: 984, download: 348, average_pv: 799, month: '十月' },
  { id: 11, pv: 1244, download: 354, average_pv: 675, month: '十一月' },
  { id: 12, pv: 1568, download: 543, average_pv: 987, month: '十二月' },
];

class LineChart extends React.PureComponent {
  axisLine = {
    stroke: '#dddddd',
    lineWidth: 1,
  };
  
  axisTickLine = {
    lineWidth: 1,
    stroke: '#ccc',
  };
  
  crosshairs = {
    type: 'y',
  };
  
  cols = {
    month: {
      alias: '月份',
      range: [0, 1],
    },
  };
  
  axisTitle = {
    autoRotate: true, // 是否需要自动旋转，默认为 true
    offset: -20, // 设置标题 title 距离坐标轴线的距离
    textStyle: {
      fontSize: '12',
      textAlign: 'center',
      fill: '#999',
      fontWeight: 'bold',
      rotate: '0',
    }, // 坐标轴文本属性配置
    position: 'end', // 标题的位置 'start' || 'center' || 'end'
  };
  
  axisLabel = {
    formatter: val => `${val}万`,
  };
  
  render() {
    const ds = new DataSet();
    const dv = ds.createView().source(list);
    
    dv.transform({
      type: 'rename',
      map: {
        pv: '访问量',
        download: '下载量',
        average_pv: '平均访问量',
      },
    }).transform({
      type: 'fold',
      fields: ['访问量', '下载量', '平均访问量'], // 展开字段集
      key: 'name', // key字段
      value: 'pvc', // value字段
    }).transform({
      type: 'rename',
      map: {
        pvc: '统计数',
      },
    });

    return (
      <Chart forceFit height={400} data={dv} scale={this.cols} padding="auto">
        <Legend />
        
        <Axis name="month" line={this.axisLine} />
        <Axis title={this.axisTitle} name="统计数" line={this.axisLine} tickLine={this.axisTickLine} label={this.axisLabel} />
        
        <Tooltip crosshairs={this.crosshairs} />
        
        <Geom type="line" position="month*统计数" size={2} shape="smooth" color="name" />
        <Geom type="point" position="month*统计数" color="name" style={{ stroke: '#fff', lineWidth: 1 }} />
      </Chart>
    );
  }
}

LineChart.propTypes = {};

LineChart.defaultProps = {};

function ErrorWrapper(props) {
  return (<ErrorBoundary><LineChart {...props} /></ErrorBoundary>);
}

export default ErrorWrapper;
