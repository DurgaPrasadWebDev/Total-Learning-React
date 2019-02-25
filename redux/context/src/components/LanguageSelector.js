import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';

export default class LanguageSelector extends Component {

    static contextType = LanguageContext;

  render() {
      console.log("hai",this.context)
    return (
      <React.Fragment>
        <i 
        className="flag us" 
        onClick={() => this.context.OnChangeLanguage('english')} 
        />
        <i 
        className="flag nl" 
        onClick={() => this.context.OnChangeLanguage('ducth')} 
        /> 
      </React.Fragment>
    )
  }
}
