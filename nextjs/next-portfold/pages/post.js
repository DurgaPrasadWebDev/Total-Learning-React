import React, { Component } from 'react';
import { withRouter } from 'next/router';
import Layout from '../components/Layout'

class post extends Component {
  render() {
      const {router} = this.props
    return (
      <Layout title={router.query.title}>
        <p>
            This is a post this my first post and this is tell about next js and learn more
        </p>
      </Layout>
    )
  }
}

export default withRouter(post)
