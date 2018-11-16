import React from 'react';
import Layout from '../../components/layout';

import Sider from './Sider';
import Footer from './Footer';

class LayoutPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Sider />
        <Layout style={{ marginLeft: 200 }}>
          <Layout.Header style={{ background: '#000', padding: 0 }} />

          <Layout.Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
              {this.props.routes}
            </div>
          </Layout.Content>

          <Footer />
        </Layout>
      </Layout>
    );
  }
}

export default LayoutPage;