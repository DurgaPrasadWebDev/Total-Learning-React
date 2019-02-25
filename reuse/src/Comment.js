import React from 'react';

import './Comment.css';
import faker from 'faker';

const Comment =() =>{
    return(
    <div className="comment">
        <a href="\" className="imagestyle" >
            <img alt="IMG" className="imag"  src={faker.image.avatar()}/>
        </a>
        <div className="content">
            <a href="\" className="author">Sam</a>
            <div className="timeDetail">Today at 8:00 AM</div>
            <div className="text">Nice Post! </div>
        </div>
    </div>
        
    );
};
export default Comment;