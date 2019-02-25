import React, { Component } from 'react'
import { connect } from 'react-redux'

import { songSelected } from '../action'

class SongList extends Component {
    renderList()
    {
        return this.props.songs.map((song) => {
            return(
                <div key={song.title}>
                    <h2>{song.title}</h2>
                    <button 
                    onClick={() => this.props.songSelected(song)}
                    >
                        select
                    </button>
                </div>
            );
        })
    }
  render() {
    return (
      <div>
        {this.renderList()}  
      </div>
    )
  }
}

const mapStatetoProps = (state) =>{
    return {songs:state.songs};
}

export default connect(mapStatetoProps,{ songSelected })(SongList);