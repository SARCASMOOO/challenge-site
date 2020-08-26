import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://shopify-challenge-f6495.web.app/'
});


export default instance;