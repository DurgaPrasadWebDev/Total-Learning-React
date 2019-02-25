import React, { Component } from 'react'
import './Videoplay.css'
class Videoplay extends Component {
  render() {
      const urlv= `https://www.youtube.com/embed/${this.props.vdurl.id.videoId}`;
      console.log(urlv);
    return (
      <div className="videostyle">
      <iframe title={this.props.vdurl.snippet.title} src={urlv} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    )
  }
}

export default Videoplay
