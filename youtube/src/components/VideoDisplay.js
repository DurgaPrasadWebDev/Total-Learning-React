import React, { Component } from 'react'
import Videoplay from './Videoplay'
import Videodesc from './Videodesc'
class VideoDisplay extends Component {
  render() {
    return (
      <div>
        <Videoplay vdurl={this.props.videosel}/>
        <Videodesc desc={this.props.videosel}/> 
      </div>
    )
  }
}

export default VideoDisplay
