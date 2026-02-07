'use client'
import axios from 'axios';

const HttpService = {
    baseUrl: process.env.URL_ENDPOINT,
    accessToken: process.env.ACCESS_TOKEN,
    apiKey: process.env.API_KEY,
    get: (url: string) => {
        
        return axios.get(HttpService.baseUrl + url, {
            headers: {
                'Authorization': `Bearer ${HttpService.accessToken}`
            }
        })
            .then((response) => response.data)
            .catch((error) => {
                console.error('Error fetching data:', error);
                throw error;
            });
    }
}

export default HttpService;