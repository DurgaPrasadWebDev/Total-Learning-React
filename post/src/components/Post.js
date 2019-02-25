import React, { Component } from 'react'
import Axios from 'axios';

class Post extends Component {
    state = {posts:[]};
    async componentDidMount()
    {
        const response = await  Axios.get('https://jsonplaceholder.typicode.com/posts');
        this.setState({posts:response.data});
        console.log(this.state.posts);
    }
  render() {
      const postDeatailAll = this.state.posts.map((eachPost) => {
          return(
              <div key={eachPost.id}>
                <h2>UserId: {eachPost.userId}</h2>
                <br/>
                <h2>Title: {eachPost.title}</h2>
                <br/>
                <p>Body: {eachPost.body}</p>
              </div>
              )
      });
    return (
      <div>
        <h1>Post Deatails</h1>
        <hr />  
        {postDeatailAll};
      </div>
    )
  }
}

export default Post;
