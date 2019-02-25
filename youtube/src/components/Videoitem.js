import React, { Component } from 'react'
import './Videoitem.css'
class Videoitem extends Component {
    getVideoDetails = (e) =>
    {
        //console.log("hai",e.target.parentElement);
        this.props.select(e,this.props.video)    
    }
  render() {
      
    return (
      <div className={this.props.classstyle} onClick={this.getVideoDetails}>
        <img src={this.props.video.snippet.thumbnails.medium.url} alt="hai" />
        <div className="title">{this.props.video.snippet.title}</div>
      </div>
    )
  }
}

export default Videoitem
