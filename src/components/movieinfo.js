import React from 'react';



const MovieInfo =()=>{
    return(
        <div className="container">
            <div className="row" onClick={props.closeMovieInfo} style={} >
            <i class="lni lni-arrow-left"></i>
        <span style={{marginLeft:10}}>
Go Back
        </span>
            </div>
            <div className="row">
                {}
            </div>
        </div>
    )
}





export default MovieInfo;




