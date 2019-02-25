import React from 'react';
import { connect } from 'react-redux';

function SelectSong(props) {
    if(!props.song){
        return <h1>SelectSong</h1>;
    }
  return (
    <div>
      <h1>{props.song.title}</h1>
      <h2>{props.song.duration}</h2>
    </div>
  )
}

const mapStatetoProps = (state) =>{
    console.log(state);
    return {song:state.selectsong};
} 
export default connect(mapStatetoProps)(SelectSong);
