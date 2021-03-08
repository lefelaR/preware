import React from 'react';


const Movie = (props)=>{

    return(
            <div className ="col s12 m6 l3">
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                            {
                          
                                props.data == null ? <img src={"https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"} alt="movie card image" style={{width:"100%", height:"360"}} /> : <img src={`https://image.tmdb.org/t/p/w500/${props.data.poster_path }`} alt="card image" style={{width:"100%", height:"360"}} />
                           }
                    </div>
                
                <div className="card-content">
                           <h6>
                               {props.data.title}
                           </h6>
                
                           <p>
                               <a href="#" onClick={()=>props.viewMovieInfo(props.MovieId)}>View Datails</a>
                           </p>
                </div>
            </div>
            </div>
    )
}

export default Movie;