import axios from 'axios';

export const Api = axios.create({
    baseURL: "https://pizza-app-api-em8y.onrender.com/",
    timeout: 80000,
});

