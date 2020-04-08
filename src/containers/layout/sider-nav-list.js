/*eslint-disable*/
import React from 'react';

import { DeploymentUnitOutlined, HomeOutlined, SolutionOutlined } from '@ant-design/icons';
import CircleIcon from '../../../assets/svgs/circle.svg';

const customIconStyle = {
  width: '8px',
  height: '8px',
  color: '#fff',
  marginRight: '5px',
};

export default [
  {
    label: "首页",
    path: "/home",
    icon: <HomeOutlined />,
  },
  {
    label: "UI元素",
    path: '/ui-elements',
    icon: <DeploymentUnitOutlined />,
    children: [
      {
        label: "按钮",
        path: "/ui-elements/buttons",
        icon: <CircleIcon style={customIconStyle} />,
      },
      {
        label: "表格",
        path: "/ui-elements/tables",
        icon: <CircleIcon style={customIconStyle} />,
      },
    ],
  },
  {
    label: '统考',
    path: '/exam',
    icon: <SolutionOutlined />,
    children: [
      {
        label: '计算机应用基础',
        path: '/exam/computer',
        icon: <CircleIcon style={customIconStyle} />,
      },
      {
        label: '大学英语B',
        path: '/exam/english',
        icon: <CircleIcon style={customIconStyle} />,
      },
    ],
  },
];
