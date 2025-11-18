'use client'
import axios from 'axios';

const HttpService = {
    get: (url: string) => {
        return axios.get(url)
            .then((response) => response.data)
            .catch((error) => {
                console.error('Error fetching data:', error);
                throw error;
            });
    }
}

export default HttpService;