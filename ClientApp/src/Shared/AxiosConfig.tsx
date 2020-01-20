import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKED_URL + 'api/',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
});