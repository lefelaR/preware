'use client'
import React, { useEffect } from 'react'
import Card from '../atoms/Card';


const Trending = () => {
    const [movies, setMovies] = React.useState([]);
    const getTrendingMovies = () => {
        // /trending/{media_type}/{time_window}
        fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=278577cd4ce20e2744a90a8340e969b3`)
            .then((data) => data.json())
            .then((data) => {
                debugger
                console.log(data.results)
                setMovies(data.results);
            })
            .catch((err) => {
                console.log(err);
            })
    }


    useEffect(() => {
        getTrendingMovies()
    }, [])

    return (
        <>
            <div className="carousel">
                {
                    movies.map((row) => {
                        return (

                            <Card 
                            key={row.id}
                            title={row.title} 
                            description={row.overview} 
                            image={`https://image.tmdb.org/t/p/w500${row.poster_path}`} 
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Trending;