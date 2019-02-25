import React, { Component } from 'react'
import Search from './components/Search'
import youtubeApi from './Axiox/ApiRequest'
import VideoList from './components/VideoList'
import VideoDisplay from './components/VideoDisplay'
class App extends Component {
    state = {videos:[],selectedvideo:null,classnamechange:"totalvideo",classorder:"videobox"}
    Getvideos =async (vedioname1) =>
    {
        console.log(vedioname1)
        youtubeApi.get('/search',{
            params:{
            q:vedioname1}
        }).then((res) => {this.setState({videos:res.data.items})})
    }
    SetasSelect = (e,selectvideo) =>
    {
        //console.log(e.target.parentElement.className)   
        this.setState({selectedvideo:selectvideo,classnamechange:"totalvideo1"}) 
    }
  render() {
    return (
      <div>
        <Search SearchvedioName={this.Getvideos} />
        {console.log(this.state.selectedvideo)}
        <div Style="float:left">
        {this.state.selectedvideo ? <VideoDisplay videosel={this.state.selectedvideo}/> :""}
        </div>
        <VideoList vidoeslist={this.state.videos} select={this.SetasSelect} chageclass={this.state.classnamechange} classstyle={this.state.classorder}/>
        
      </div>
    )
  }
}

export default App
