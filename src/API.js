import axios from 'axios';
const URL = 'https://www.googleapis.com/youtube/v3/search';

let config = {
    part: 'snippet',
    key: process.env.REACT_APP_KEY,
    maxResults: 5,
    type: 'video'
};

export default function(options, callback) {
    let params = {...config, ...options};
    console.log(`Search query passed to YouTube Search API: ${options.q}`);
    
    axios.get(URL, {params})
        .then( (response) => {
            if(callback) {callback(response.data.items);}
        })
        .catch((error) => {
            console.error('An error occured during fetching data from YouTube', error);
        });
}
