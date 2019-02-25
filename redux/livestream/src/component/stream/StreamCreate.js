import React, {Component} from 'react';
import { connect } from 'react-redux';


import { CreateStream } from '../../actions';
import StreamFrom from './StreamFrom';


class  StreamCreate extends Component{

    
    onSubmit = formValues =>
    {
        if(this.props.sign.isSignIN)
        {
            this.props.CreateStream(formValues);
        }else{
            console.log("not sign in")
        }
    }
    render(){
        return (
            <div><StreamFrom OnSubmit={this.onSubmit}/></div>   
          )
    }
  
}


const mapStateToProps = (state) =>{
    console.log('not',state.sing);
    return {sign:state.sing}
}



export default connect(mapStateToProps,{CreateStream})(StreamCreate)