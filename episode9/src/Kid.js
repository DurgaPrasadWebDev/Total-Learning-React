import React, { Component } from 'react'
import Links from './Links'
class Kid extends Component {

    gotokidpart = (ev) =>
    {
        let kid = ev.target.textContent.toLowerCase();
        console.log(kid);
        this.props.history.push(`/kid/${kid}`);
    }
  render() {
      const kid=(this.props.match.params.kid)?this.props.match.params.kid:null;
    return (
      <div>
        <Links />
        <h1>This is Kids</h1>
        {
            kid &&  kid !=="one" && <button onClick={this.gotokidpart}>one</button> 
        }
        {
            kid && kid !=="two"  && <button onClick={this.gotokidpart}>two</button> 
        }
        {
            kid && <h2>This is {kid}</h2>}
    
      </div>
    )
  }
}

export default Kid
