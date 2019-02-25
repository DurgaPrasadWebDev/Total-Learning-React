import Axios from 'axios';
const KEY = `AIzaSyB6OHE_vqIzKLB0hbdxj_bhp0vpYQH-ZdI`;
export default Axios.create( {
        baseURL : "https://www.googleapis.com/youtube/v3",
        params : {
            part:'snippet',
            maxResults:25,
            type:"",
            key : KEY
        }
    }
);