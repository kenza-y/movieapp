 const getMovies = async page => {
    const movies = await (
      await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=83488f3fb3985e71b9170312b9934a93&page=${page}`)
    ).json();
    return movies.results;
  };

  export default getMovies;