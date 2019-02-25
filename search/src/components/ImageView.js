import React, { Component } from 'react'
import './ImageView.css'
class ImageView extends Component {
    state = {desc:"hai"}
    getImages()
    {
        let image=this.props.imagelist.map((image) =>
        {
            return (<div key={image.id}><img  src={image.urls.regular} alt={image.description} onClick={this.chage}/></div>)
        })
        return image;
    }
    chage = (e) =>
    {
        e.preventDefault();
        // let det=e.target;
        // let p=det.nextElementSibling;
        // let s = this.takedesc
        //p.textContent={s}
        
    }
  render(){
    return (
      <div className="imageviewstyle">{this.getImages()}</div>
    )
  }
}

export default ImageView
