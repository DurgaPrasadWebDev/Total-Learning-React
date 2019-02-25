import React from 'react'
import ReactDom from 'react-dom'

const App = ()=>{
    const lableText = {text: 'Name'};
    const Style ={backgroundColor: 'blue',color: 'white'};
    return (
        <div className="ui container comments">
            <div className="comment">
                <a  href="\" className="avatar">
                    <img alt="Img" src="" />
                </a>
                <div className="content">
                    <a href="\" className="author">
                        Durga
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6:00 AM</span>
                        <div className="text">
                             Nice Post!
                        </div>
                    </div>
                    
                </div>
            </div>

        </div> 
    );
};

ReactDom.render(<App />,document.querySelector("#root"));

