'use client'
import HttpServices from "./HttpServide";

const getTrendingMovies = async (language: string = 'en-US') => {
 try
 {
   const data = await HttpServices.get(`trending/all/week?language=${encodeURIComponent(language)}`);
   return data;
 } catch(er:any) {
    throw new Error(er.message);
 }
}

const getMovies = async(language: string = 'en-US') => {
    try {      
        const data = await HttpServices.get(`trending/movie/day?language=${encodeURIComponent(language)}`);
        return data;
    } catch (er: any) {
        throw new Error(er.message);
    }
}


export default {
    getTrendingMovies,
    getMovies
}