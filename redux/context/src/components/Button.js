import React from 'react'
import LanguageContext from '../context/LanguageContext'
import ColorContext from '../context/ColorContext'

export default class  Button extends React.Component {
   static contextType = LanguageContext;
    renderValue = (value) =>
    {
        return value === 'english' ? 'Submit' : 'Voorleggen';
    }
    renderColor = (color) =>
    {
        return(
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                {(value) => this.renderValue(value.Language)}
                </LanguageContext.Consumer>
                </button>
        );
    }
    render()
    {
        return (
            <div>
                <ColorContext.Consumer>
                {(color) => this.renderColor(color)}
                </ColorContext.Consumer>
            </div>  
          )
    }
  
}
