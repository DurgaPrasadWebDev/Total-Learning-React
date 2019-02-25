import React, { Component } from 'react'
import Message from './components/Message'
class App extends Component {
    constructor() {
      super()
    
      this.state = {
         messages:[
             {id:1,
            person:"Durga",
            text:"hai How are you",
            status:"not-read"    },
            {id:2,
                person:"naga",
                text:"i am fine what about you",
                status:"not-read"    },
                {id:1,
                    person:"mohan",
                    text:"where are you bro",
                    status:"not-read"    },
                    {id:1,
                        person:"prasad",
                        text:"when come to class",
                        status:"not-read"    }
         ]
      }
    }
    changetotal = (mesg) =>
    {
        let mesgs = this.state.messages.map((eachmeg) => {
            if(mesg.id===eachmeg.id)
            {
                    eachmeg.status=mesg.status1;
            }
            return eachmeg;
        })
        this.setState({messages:mesgs})
    }
  render() {
    return (
        this.state.messages.map((obej) => {return <Message key={obej.id} msg={obej} fun={this.changetotal}/> })
    )
  }
}

export default App
