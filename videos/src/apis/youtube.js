import axios from 'axios';

const KEY = 'AIzaSyCSjgR3sexrF8ni8f3ljwpMP7Cw4XKxxR4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});