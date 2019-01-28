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
    sub_menus: [
      {
        label: "按钮",
        path: "/ui-elements/buttons",
        icon: <CircleIcon style={customIconStyle} />,
      },
    ],
  },
  {
    label: "表格",
    path: "/table",
    icon: <Icon type="table" />,
  },
];
