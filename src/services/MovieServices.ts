'use client'
import HttpServices from "./HttpServide";

const trending = "/trending/all/";

const getTrendingMovies = () => {
 try
 {
   const  data  = HttpServices
   .get(`https://api.themoviedb.org/3/trending/all/week?api_key=278577cd4ce20e2744a90a8340e969b3`);
   return data;
 } catch(er:any)
 {
    throw new Error(er.message);
 }

}


export default {
    getTrendingMovies
}