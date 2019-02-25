import React, { Component } from 'react';
import './Search.css';
class Search extends Component {
    state = {mess:""};
    Taketext = (e) =>
    {
        this.setState({mess:e.target.value});       
    };
    Trowmessage = (e) =>
    {
        e.preventDefault();
        this.props.fun(this.state.mess);
    };
  render() {
    return (
      <div className="searchcontainer">
        <h1 className="head">Search Box </h1> 
        <div className="searchbox">
            <form className="searchboxform" onSubmit={this.Trowmessage}>
                <input className="textbox"type="text" placeholder="Enter the images name" value={this.state.mess} onChange={this.Taketext}/>
            </form>
        </div>
      </div>
    )
  }
}

export default Search;
