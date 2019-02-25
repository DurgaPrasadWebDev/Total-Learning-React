import React, { Component } from 'react';


import Layout from '../components/Layout';
import userApi from '../components/api';
import Error from './_error'

export default class about extends Component {
    static async getInitialProps()
    {
        const user = await userApi.get('/userDetails')
        //const statusecode = user.status > 200 ? user.status : false
        //console.log(statusecode);

        return {user:user.data["0"]};
    }
  render() {
      const {FirstName, SecondName,Id,Email} = this.props.user;
      //const {status} = this.props.apistatus;
       // console.log(this.props);  
        //  if(status)
        // {
        //    return  <Error />
        // }  
        return (
      <Layout title="About">
        <h1>UserDetails</h1>
        <h3>Name: {FirstName+' '+SecondName}</h3>
        <h3>Id: {Id}</h3>
        <h3>Email: {Email}</h3>
        <p>This is page Tell About </p>
      </Layout>
    )
  }
}
