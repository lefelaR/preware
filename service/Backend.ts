import { http } from "./AxiosService";


export const fetchMovies = async (endpoint: string, params = {}) => {
    try {
        const response = await http.get(endpoint, { params });
        return response.data;
    } catch (error) {
        console.error('Failed to fetch movies:', error);
        throw error;
    }
}; 

