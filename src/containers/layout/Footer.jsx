import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/layout';

function Footer({ content }) {
  const text = content || 'Ant Design ©2018 Created by Ant UED';
  return (
    <Layout.Footer style={{ textAlign: 'center' }}>
      {text}
    </Layout.Footer>
  );
}

Footer.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
}

export default Footer;