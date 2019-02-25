import React from 'react';
import ReactDom from 'react-dom';
import Comment from './Comment';
import Approvecard from './Approvecard'

const App = () => {
    return(
        <div className="Contailner">
            <Approvecard><Comment /></Approvecard>
            <Approvecard><Comment /></Approvecard>
            <Approvecard><Comment /></Approvecard>
            
        </div>
    );
};

ReactDom.render(<App />,document.getElementById('root'));