import React, { Component } from 'react'
import './Search.css'
class Search extends Component {
    state = {text1:""}
    Taketext = (e)=>
    {
        this.setState({text1:e.target.value})
    };
    Trowtext = (e) =>
    {
        e.preventDefault();
        this.props.SearchvedioName(this.state.text1)
        console.log(this.state.text1);
    }
  render() {
    
    return (
      <div className="Searchbox" >
        <form className="Searchboxitem" onSubmit={this.Trowtext}>
            <input type="text" onChange={this.Taketext} value={this.state.text1}/>
        </form>
      </div>
    )
  }
}

export default Search
