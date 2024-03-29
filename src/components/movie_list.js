import React from 'react';
import Movie from './movie';



const MovieList = (props)=>{

  return(
            <div className="container">
            <div className="row">
                    <div className="col s12">
                        {
                            props.movies.map((movie,i) =>{
                              
                                return(
                                    <Movie key={i} viewMovieInfo = {props.viewMovieInfo} movieId={movie.id} data={movie} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
 
  )
}


 export default MovieList;