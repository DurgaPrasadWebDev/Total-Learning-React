import React, { Component } from 'react'
import { connect } from 'react-redux';

import { fechPostAndUser } from '../actions';
import UserName from './UserName';

class PostList extends Component {
    componentDidMount()
    {
        this.props.fechPostAndUser();
    }
    renderList()
    {
        return (
         this.props.posts.map(post => <div key={post.id}>
            <h2>title:-{post.title}</h2>
            <h3>body:-{post.body}</h3>
            <UserName userId={post.userId}/>
            <hr/>
            
            </div>)  
        )
    }
  render() {
    return (
        <div>
            {this.renderList()}
        </div>    
    )
  }
}

const mapStateToProps = (state) =>
{
    //console.log("post",state);
    return {posts:state.posts}
}


export default connect(mapStateToProps,{fechPostAndUser})(PostList);
