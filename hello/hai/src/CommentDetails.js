import React from 'react';
import faker from 'faker';

const CommentDetails = prop =>
{
    //console.log(prop.author);
    //console.log(prop.timeAgo);
    return (
        <div className="comment">
            <a  href="\" className="avatar">
                <img alt="Img" src={faker.image.avatar()} />
            </a>
            <div className="content">
                <a href="\" className="author">
                    {prop.author}
                </a>
                <div className="metadata">
                    <span className="date">{prop.timeAgo}</span>
                    
                </div>
                <div className="text">
                    Nice Post!
                </div>
                
            </div>
        </div>
    );
};

export default CommentDetails;