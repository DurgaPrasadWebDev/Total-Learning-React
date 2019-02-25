import React, { Component } from 'react'
import { connect } from 'react-redux';

import { SignIN , SignOut } from '../actions';

class GoogleAuth extends Component {
    //state = {isSignIn:null};
    componentDidMount()
    {
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'178425122608-vht0qoe9ku4rltq31lsb0hsgjs3jta40.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth=window.gapi.auth2.getAuthInstance();
                this.onAuthChange();
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    onAuthChange = () =>{
        if(this.auth.isSignedIn.get())
        {
            //console.log("init",this.auth.currentUser.get().getId())
            this.props.singin(this.auth.currentUser.get().getId());     
        }else{
            this.props.singout();
        }
    }
    OnSingOut = () =>{
        this.auth.signOut()
    } 
    OnSingIn = () =>{
        this.auth.signIn()
    }
    renderAuthList()
    {
        if(this.props.sign===null){
            return null;
        }else if(this.props.sign.isSignIN){
            console.log(this.props.sign.userId)
            return <button onClick={this.OnSingOut}>Sing Out{this.props.sign.userId}</button>
        }else {
            return <button onClick={this.OnSingIn}>Sing In</button>
        }
    }
  render() {
    return (
      <div style={{float:"right"}}>
        {this.renderAuthList()}
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
    //console.log(state.sing);
    return {sign:state.sing};
}

const mapDispatchToProps = (dispatch) =>{
    return {
        singin:(id) => dispatch(SignIN(id)),
        singout:() => dispatch(SignOut())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GoogleAuth);
