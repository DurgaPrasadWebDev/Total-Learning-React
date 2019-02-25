import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';  

import { GetStream,EditStream } from '../../actions'
import StreamFrom from './StreamFrom'

class  StreamEdit extends React.Component{
    //console.log("hai",props)
    componentDidMount()
    {
        this.props.GetStream(this.props.match.params.id)

    }
    onSubmit = (formValues) =>
    {
        this.props.EditStream(this.props.match.params.id,formValues);
    }
    renderList = () =>
    {
        if(!this.props.editstream){
            return null;
        }   
        return(
            <div>
            <StreamFrom OnSubmit={this.onSubmit} initialValues={_.pick(this.props.editstream, 'title', 'description' )} />
            </div>
        )
    }
    render()
    {
        return (
            <div>
                {this.renderList()}
            </div>
          )
    }
  
}

const mapStateToProps = (state,ownProps) =>
{
    //console.log(state);
    return {editstream:state.stream[ownProps.match.params.id]}
}
export default connect(mapStateToProps,{GetStream,EditStream})(StreamEdit);