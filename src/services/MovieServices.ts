'use client'
import HttpServices from "./HttpServide";

const getTrendingMovies = (language: string = 'en-US') => {
 try
 {
  debugger
   const data = HttpServices.get(`/api/trending?language=${encodeURIComponent(language)}`);
   return data;
 } catch(er:any)
 {
    throw new Error(er.message);
 }

}


export default {
    getTrendingMovies
}