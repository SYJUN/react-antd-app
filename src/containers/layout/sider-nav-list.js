/*eslint-disable*/
import React from 'react';

import { Icon } from 'antd';
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
    icon: <Icon type="home" />,
  },
  {
    label: "UI元素",
    path: '/ui-elements',
    icon: <Icon type="deployment-unit" />,
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
    icon: <Icon type="solution" />,
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
