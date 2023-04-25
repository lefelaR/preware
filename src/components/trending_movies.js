import React, { useEffect } from 'react'


const Trending = () => {
    const [movies, setMovies] = React.useState([]);


    const getTrendingMovies = () => {
        // /trending/{media_type}/{time_window}
        fetch(`https://api.themoviedb.org/3//trending/all/week?api_key=278577cd4ce20e2744a90a8340e969b3`)
            .then((data) => data.json())
            .then((data) => {
                debugger
                console.log(data.results)
                setMovies(data.results);
            })
            .catch((err) => {
                debugger
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
                            <a className="carousel-item" href="#two!" key={row.id}>
                                <img src={`https://image.tmdb.org/t/p/w500${row.poster_path}`} alt="movie card image" style={{ width: "100%", height: "360" }} />
                            </a>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Trending;