import axios from "axios";

const BASE_URL_DEV = 'https://jsonplaceholder.typicode.com/';
const BASE_URL_PROD = '';

const instance = axios.create({
    baseURL:  process.env.NODE_ENV === "production" ? BASE_URL_PROD : BASE_URL_DEV,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;
