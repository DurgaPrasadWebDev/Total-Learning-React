import React from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Model from '../Model';
import  history from '../../history';
import { GetStream,DeleteStream } from '../../actions';

class  StreamDelete extends React.Component {
    componentDidMount()
    {
        this.props.GetStream(this.props.match.params.id);
    }

    OnClick = () =>{
        this.props.DeleteStream(this.props.match.params.id)    
    }
    renderAction = () => {
        return(
            <React.Fragment>
            <button onClick={this.OnClick} className="ui button negative">Delete</button>
            <NavLink 
                className="ui button"
                to="/"
            >
                Cancle
            </NavLink>
        </React.Fragment>
        );
    }

    renderContent = () =>{
        if(!this.props.stream)
        {
            return 'Are you sure to Delete this';
        }
        return `Are you sure to Delete this title ${this.props.stream.title}`
    }
    render(){
        return (
            <div>
                <Model 
                header="Delete Stream" 
                content={this.renderContent()} 
                action={this.renderAction()}
                OnDismiss={() => {history.push('/')}}
                />
            </div>
          )
    }
  
}

const mapStateToProps = (state,ownPorps) =>
{
    return{stream:state.stream[ownPorps.match.params.id]};
}

export default connect(mapStateToProps,{GetStream,DeleteStream})(StreamDelete);