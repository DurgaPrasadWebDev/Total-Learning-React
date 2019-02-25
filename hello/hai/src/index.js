import React from 'react';
import ReactDOM from 'react-dom';

import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';



const App = ()=>{
    return (

        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetails author="sam" timeAgo="Today at 9:00 AM"/>
            </ApprovalCard>
            
            <CommentDetails author="durga" timeAgo="Today at 2:00 AM"/>
            <CommentDetails author="naga" timeAgo="Today at 3:00 PM"/>
        </div> 
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
