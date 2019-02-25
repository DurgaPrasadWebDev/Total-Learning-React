import React, { Component } from 'react'
import { connect } from 'react-redux';


class UserName extends Component {
  render() {
    if(!this.props.UDetail){
        return null;
    }
    return (
      <div>
        <h1>userName:-{this.props.UDetail.name}</h1>  
        </div>
        )
  }
}

const mapStateToProps = (state,ownProps) =>
{
    return {UDetail:state.users.find((user) => user.id===ownProps.userId)};
};

export default  connect(mapStateToProps)(UserName);
