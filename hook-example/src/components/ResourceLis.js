import React from 'react';

import {useResouce} from './useResouce';

const ResourceLis = (props) =>
{
    const resource = useResouce(props.resource);
    return(
        <div>
            <ul>
            {resource.map((data) => <li key={data.id}>{data.title}</li>)}
            </ul>
        </div>
    )
}

export default ResourceLis;