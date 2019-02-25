import React, { Component } from 'react'
import '/home/rgukt/reactApp/episode6/src/css/Message.css'

class Message extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          id:this.props.msg.id,
         person1:this.props.msg.person,
         text1:this.props.msg.text,
         status1:this.props.msg.status,
         classname:"cord"
      }
    }
    changepresent = (ev) =>
    {
        

        let msg={...this.state}
        let cla;
        if(msg.status1==="read")
        {
            msg.status1="not-read"
            cla="cord"
        }
        else
        {
            msg.status1="read"
            cla="cordch"
        }

        this.setState({...msg});
        this.setState({classname:cla})
        this.props.fun(msg)
    }
    
  render() {
      let label = (this.state.status1==="read")?"unRead mark" : "Read mark";
    return (
      <div className="Message">
            <div className={this.state.classname}></div>
            <div className="messagecontent">
            <h1>The person Name:{this.state.person1}</h1>
            <p>{this.state.text1}</p>
            <button id="btt" onClick={this.changepresent}>{label}</button>
        </div>
      </div>
    )
  }
}

export default Message
