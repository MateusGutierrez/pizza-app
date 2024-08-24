import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const baseURL = process.env.BASE_URL

export const Api = axios.create({
    baseURL: baseURL,
    timeout: 8000,
});

