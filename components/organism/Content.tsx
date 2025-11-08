
import { use, useEffect } from 'react';
import { fetchMovies } from '../../service/Backend';

const Content = () => {

    useEffect(() => { 

    const getMovies = async () => {
      try {
        const data = await fetchMovies('movie/popular');
        console.log('Fetched movies:', data);
      } catch (error) {
        console.error('Error fetching movies on mount:', error);
      }
    };
    getMovies();
    }, []);

    return (
        <div>
            <h1>Content Component</h1>
        </div>
    );
}

export default Content();