import Layout from '../components/Layout';


import React, { Component } from 'react';
import Link from 'next/link';

const PostList = ({title,slug}) =>
{
    return(
    <Link as={`/${slug}`} href={`/post?title=${title}`}>
        <a>
        <li>
            {title}
        </li>
        </a>
    </Link>
    );
}

export default class blog extends Component {
  render() {
    return (
      <Layout title="My Post">
            <ul>
              <PostList title="React" slug="react-post"/>  
              <PostList title="Angular" slug="angular-post"/>
              <PostList title="Vute" slug="vute-post"/>
            </ul>
      </Layout>
    )
  }
}
