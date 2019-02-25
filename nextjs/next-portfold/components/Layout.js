import React, { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head';
import Router from 'next/router';
import Nprograss from 'nprogress';

Router.onRouteChangeStart = url => {
    console.log(url)
    Nprograss.start();
}
Router.onRouteChangeComplete = () =>  Nprograss.done()
Router.onRouteChangeError = () => Nprograss.done()
export default class Layout extends Component {
  render() {
    return (
      <div className="root">
        <Head>
            <title>Next Js Tutorial</title>
        </Head>
        <header>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/hirme">
                <a>Hirme</a>
            </Link>
            <Link href="/blog">
                <a>MyBlog</a>
            </Link>
        </header>
        <main>
        <h1>{this.props.title}</h1>
        <div>{this.props.children}</div>  
        </main>
        <footer>
            <h3>DurgaPrasad&copy; {new Date().getFullYear()+'-'+ new Date().getMonth()+'-'+new Date().getDate()}</h3>
        </footer>
        <style jsx>{`
            .root{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            header
            {
                width:100%;
                display: flex;
                justify-content: space-around;
                padding : 10px 0px 10px 0px ;
                font-size:1.2rem;
                background:orange;
            }
            header a
            {
                padding: 8px;
                text-decoration: none;
                font-weight:bold;
                color:brown;
            }
            header a:hover
            {
                padding: 8px;
                text-decoration: none;
                font-weight:bold;
                color:black;
            }
            footer
            {
                display:flex;
                justify-content:center;
                align-items:center;
                width:100%;
                height:200px;
                color:red;
                background:black;

            }
            main
            {
                widht:100%;
                height:100%;
                margin:10px 0px
            }

        `}</style>
      </div>
    )
  }
}
