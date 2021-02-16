import React,{useState, useEffect} from "react";
import MovieCard from './MovieCard';
import getMovies from './API';


const MovieCardList = (event) => {
    const [page, setPage] = useState(1);
    const [loading,setLoading] = useState(true);
    const [movies,setMovies] = useState([]);

    const handleScroll = (e) => {    
        console.log('Fetch more list items!');
        const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight
        if (bottom) {
          console.log('at the bottom');
          setPage( page => page + 1);

      }
    };
      
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
      }, [])
    
      useEffect(() => {
        const loadMovies = async () => {
          setLoading(true);
          const newMovies = await getMovies(page);
          setMovies((prev) => [...prev, ...newMovies]);
          setLoading(false);
        };
    
        loadMovies();
      }, [page]);
    

    return (
        <div className='App'>
            <div onScroll={handleScroll}>
                {movies && movies.map((movie) => <MovieCard 
                vote_count = {movie.vote_count}
                popularity= { movie.popularity}
                vote_average = {movie.vote_average}
                 release_date={movie.release_date}
                 title={movie.original_title} 
                 poster_path = {movie.poster_path}
                overview ={movie.overview} />)}
            </div>
            {loading && <div>loading...</div> }
        </div>
    );
}

export default MovieCardList;