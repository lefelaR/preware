import axios from 'axios';


    const http = axios.create({
        baseURL: 'https://api.themoviedb.org/3/',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        params: {
            'api_key': process.env.API_KEY,
        },
    });

    http.interceptors.response.use(
        response => response,
        error => {
            console.error('API Error:', error.response ? error.response.data : error.message);
            return Promise.reject(error);
        }
    )
   


export  { http };