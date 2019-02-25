import React, { Component } from 'react';

class CreateTestSeries extends Component {
    state ={title:'',preference:10,image:''}
    OnSubmit = (e) =>{
        e.preventDefault();
        console.log(JSON.stringify(this.state));

    }
  render() {
    return (
      <div >
        <form onSubmit={this.OnSubmit} className="ui form">
        <div className="field">
        <label htmlFor="title">Title:</label>
        <input id="title" value={this.state.title} onChange={(e) => {this.setState({title:e.target.value})}} required/>
        </div>
        <div className="field">
        <label htmlFor="preference">Preference:</label>
        <input id="preference" value={this.state.preference} onChange={(e) => {this.setState({preference:parseInt(e.target.value)})}} required />
        </div>
        <div className="field">
        <label htmlFor="image">Image:</label>
        <input id="image" value={this.state.image} onChange={(e) => {this.setState({image:e.target.value})}} required />
        </div>
        <button type="submit" className="ui button">SUBMIT</button>
        </form>
      </div>
    )
  }
}

export default CreateTestSeries;