import React from 'react';
import PropTypes from 'prop-types';

import AntdLayout, { Header, Content, Footer, Sider } from 'antd/lib/layout';
import 'antd/lib/layout/style';

function Layout({ children, ...props }) {
  return (
    <AntdLayout {...props}>
      {children}
    </AntdLayout>
  );
}

Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;
Layout.Sider = Sider;

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;