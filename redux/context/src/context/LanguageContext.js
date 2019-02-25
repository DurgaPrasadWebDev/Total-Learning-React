import React from 'react';

const Context =  React.createContext('english');

export class LanguageStore extends  React.Component{
    state = {Language:'english'};

    OnChangeLanguage = (value) =>
    {
        this.setState({Language:value});
    }
    render(){
        return(
            
            <Context.Provider value={{...this.state,OnChangeLanguage:this.OnChangeLanguage}}>
                {this.props.children}
            </Context.Provider>
        )
        
    }
}

export default Context;