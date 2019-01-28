/*eslint-disable*/
import React from 'react';

import { Icon } from 'antd';

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
        icon: '',
      },
    ],
  },
  {
    label: "表格",
    path: "/table",
    icon: <Icon type="table" />,
  },
];
