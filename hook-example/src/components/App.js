import React, { useState } from 'react';
import ResourceLis from './ResourceLis';

const App = (props) =>
{
    const [resource,setresource] = useState('posts')
    return(
        <div>
            <button onClick={() => {setresource('posts')}}>Post</button>
            <button onClick={() =>{setresource('todos')}}>Todo</button>
            <div>
                <ResourceLis resource={resource}/>
            </div>
        </div>
        
    );
    

}

export default App;