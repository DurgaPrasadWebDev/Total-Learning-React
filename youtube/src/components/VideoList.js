import React from 'react'
import Videoitem from './Videoitem'
import './VideoList.css'
const VideoList = (props) =>
{
    return(
        <div className={props.chageclass}>
            {props.vidoeslist.map((eachvideo) => <Videoitem video={eachvideo} select={props.select} classstyle={props.classstyle}/> )}
        </div>
    );
}
export default VideoList
