'use client'
import HttpServices from "./HttpServide";

const getTrendingMovies = () => {
 try
 {
  debugger
   const data = HttpServices.get('/api/trending');
   return data;
 } catch(er:any)
 {
    throw new Error(er.message);
 }

}


export default {
    getTrendingMovies
}