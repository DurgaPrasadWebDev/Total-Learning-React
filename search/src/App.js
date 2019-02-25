import React, { Component } from 'react';
import Search from './components/Search';
import Axios from 'axios';
import ImageView from './components/ImageView'
class App extends Component {
    state = {images:[]}
     onSearch =  (message) =>
    {
        Axios.get(`https://api.unsplash.com/search/photos`,{params:{query:message},headers:{Authorization: `Client-ID 3bc59ceae795818bcbb5f4a6decf591af08a2b9239034f6ffc09d72de0943fcf`}}).then((res) =>
        {
            this.setState({images:res.data.results});
        })
    };
    

  render() {
    return (
      <div>  
        <Search fun={this.onSearch} />
        <ImageView imagelist={this.state.images} />
      </div>
    )
  }
}

export default App
