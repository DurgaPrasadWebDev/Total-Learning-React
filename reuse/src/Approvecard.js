import  React from 'react';
import './card.css'

const Approvecard = (prop)=>{
    return (
        <div className="card">
            <div className="content">{prop.children}</div>
            <div className="cardbuttons" >
                <div className="button" id="red"><p>Approve</p></div>
                <div className="button" id="green"><p>Reject</p></div>
            </div>
            
        </div>
    );
};
export default Approvecard;