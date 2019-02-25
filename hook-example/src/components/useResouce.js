import  {useState,useEffect} from 'react';
import axios from 'axios';

export const useResouce = (resouce) =>
{
    const [resourcelist,setresourcelist] = useState([]);

    useEffect(()=>
    {
        (async (resource) =>
        {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`); 
        setresourcelist(response.data);
        })(resouce)
    },[resouce])

    return resourcelist;
} 