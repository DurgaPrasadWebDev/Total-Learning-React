import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { GetStreams } from '../../actions';

class  StreamList extends React.Component {
    componentDidMount(){
        this.props.GetStreams();
    }

    renderCreateStream = () =>
    {
        if(this.props.isSign)
        {
            return(
                <div>
                    <NavLink to="/streams/new">
                        <button>Create Stream</button>
                    </NavLink>    
                </div>
            )
        }
    }
    renderAdmin = (userId,id) =>{
        if(userId===this.props.userId){
            return(
            <div>
                <NavLink to={`/streams/edit/${id}`}><button>Edit</button></NavLink>
                <NavLink to={`/streams/delete/${id}`}><button>Delete</button></NavLink>
                
            </div>
            )
        }    
    }
    renderList = () =>{
        return(
            <div>
                {   this.props.streamlist.map(
                    (item) => <div key={item.id}>
                        <h3><NavLink to={`/streams/${item.id}`}>{item.title}</NavLink></h3>
                        <div>{item.description}</div>
                        <div>{this.renderAdmin(item.userId,item.id)}</div>
                        <hr/>
                    </div>
                    )
                }
                
            </div>
        )
    }
    render(){
        return (
            <div>
            <h1>StreamList</h1>
            {this.renderList()}
            {this.renderCreateStream()}
            </div>
          )
    }
    
}

const mapStateToProps = (state) =>{
    return{
        streamlist:Object.values(state.stream),
        userId:state.sing.userId,
        isSign:state.sing.isSignIN
    }
}

export default connect(mapStateToProps,{GetStreams})(StreamList);
