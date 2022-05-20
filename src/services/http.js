import axios from 'axios';

export const http = axios.create({
    baseURL: 'https://api.punkapi.com/v2/',
    headers: {
        'Content-type': "application/json",
    },
    body: JSON.stringify(),
});



