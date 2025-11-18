'use client'
import React, { useEffect } from 'react'
import Card from '../atoms/Card';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MovieServices from '@/src/services/MovieServices'


const Trending = () => {
    const [movies, setMovies] = React.useState([]);
   
    
    useEffect(() => {
       MovieServices.getTrendingMovies().then(
        (res :any) => {
            console.log(res.results);
            setMovies(res.results)
        }
    ).catch((er) => {
        console.log("brrr");
    })
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid 
                size ={2}
                >
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ipsum corporis eum, ipsam et vitae veniam repudiandae delectus perspiciatis nihil a laboriosam quo alias saepe nemo quasi reiciendis ea. Assumenda!
                </Grid>
                <Grid 
                container
                size = {8}
                spacing={2} 
                columns={{ xs: 2, sm: 3, md: 4 }}
                >
                    {
                            movies.map((row) => {
                                return (
                                    <Grid>
                                        <Card 
                                        key={row.id}
                                        title={row.title} 
                                        description={row.overview} 
                                        image={`https://image.tmdb.org/t/p/w500${row.poster_path}`} 
                                        />
                                    </Grid>
                                )
                            })
                        }   
                
                </Grid>
                <Grid size = {2}>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, doloremque odio. Corporis quia doloremque, ipsam alias quaerat omnis consectetur dolore cumque? A obcaecati esse pariatur deleniti et praesentium blanditiis. Maiores.
                </Grid>
            </Grid>
        </Box>
    )
}

export default Trending;