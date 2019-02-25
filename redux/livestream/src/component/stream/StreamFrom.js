import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form'



class  StreamFrom extends Component{

    renderError = ({ touched, error}) =>{
        if(touched && error)
        {
            return <div>{error}</div>
        }

    }

    inputField = ({input ,label, meta}) =>{
        //console.log(meta)
        return (
            <div>
            <label>{label}</label>
            <input {...input} />
            <div>{this.renderError(meta)}</div>
            </div>
        )
    }
    onSubmit = formValues =>
    {
        this.props.OnSubmit(formValues)
    }
    render(){
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} autoComplete="off"  >
                <Field 
                name="title" 
                component={ this.inputField} 
                label="Enter the Title"
                /> 
                <Field 
                name="description" 
                component={ this.inputField} 
                label="Enter the Description"/> 
                <button>Submit</button>
            </form>
          )
    }
  
}

const validate = formValues =>
{   
    const error ={};
    if(!formValues.title)
    {
        error.title="First Enter The Title";
    }
    if(!formValues.description)
    {
        error.description="Frist Enter the Description";
    }
    console.log("error",error);
    return error;
}




export default reduxForm({
    form:'StreamFrom',
    validate
})(StreamFrom);
