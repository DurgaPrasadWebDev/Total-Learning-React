import React from 'react';

import LanguageContext from '../context/LanguageContext'

export default class Field extends React.Component{
    static contextType = LanguageContext;
    rendervalue = (value) =>
    {
        return value === 'english' ? 'Name' : 'Naam';
    }
    render()
    {
        return (
            <div className="ui form">
              <label className="ui label">
              <LanguageContext.Consumer>
                {(value) => this.rendervalue(value.Language)}
              </LanguageContext.Consumer>
              </label>
              <input className="ui input"/>
            </div>
          )
    }
  
}

