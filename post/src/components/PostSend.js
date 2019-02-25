import React, { Component } from 'react';
import Axios from 'axios';

class PostSend extends Component {
    state = {userId:'',title:'',body:''}
    onChange = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    };
    onSubmit = async (e) => {
        e.preventDefault();
        const userId =this.state.userId;
        const title = this.state.title;
        const body = this.state.body;
        const response = await Axios.post('https://jsonplaceholder.typicode.com/posts',{
            userId,
            title,
            body
        })
        console.log(response);
        
    };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
            <label>UserId:</label>
            <input type="text" name='userId'value={this.state.userId} onChange={this.onChange}/>
            <br />
            <br />
            <label>Title:</label>
            <input type="text" name='title' value={this.state.title} onChange={this.onChange}/>
            <br />
            <br />
            <label>Body:</label>
            <textarea name='body' value={this.state.body} onChange={this.onChange}/>
            <br />
            <br />
            <button type="submit">Send</button>
         </form>
         <hr/>
      </div>
    )
  }
}

export default PostSend;
