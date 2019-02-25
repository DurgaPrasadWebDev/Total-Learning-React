import React from 'react'
import flv from 'flv.js';
import { connect } from 'react-redux';

import { GetStream } from '../../actions';

class  StreamShow extends React.Component {
    constructor(props){
        super(props);
        this.videoRef=React.createRef();
        
    }
    bulidPlayer = () =>
    {
        if(this.palyer || !this.props.stream)
        {
            return ;
        }
        this.palyer = flv.createPlayer(
            {
                type:'flv',
                url:'1.flv'
            }
        )
        this.palyer.attachMediaElement(this.videoRef.current);
        this.palyer.load()
    }
    componentDidMount()
    {
        this.props.GetStream(this.props.match.params.id)
        this.bulidPlayer();
        
    }
    componentDidUpdate()
    {
        this.bulidPlayer()
    }
    renderStream()
    {
        return(
            <React.Fragment>
                <video ref={this.videoRef} style={{width:"100%"}} controls/>
                <h1>{this.props.stream.title}</h1>
                <p>{this.props.stream.description}</p>
            </React.Fragment>
        )
    }
    render()
    {
        if(!this.props.stream)
        {
            return null;
        }
        return (
            <div>
                {this.renderStream()}
            </div>
          )
    }
  
}

const mapStateToProps = (state,ownProps) =>
{
    return {stream:state.stream[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{GetStream})(StreamShow);
