import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import "./Home.css"

class Home extends React.Component {

getMovies = async () => {
  const {data:{data: {movies}}} = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=raiting');
  this.setState({movies, isLoading: false});
}

componentDidMount(){
  this.getMovies();
}

state = { 
  isLoading: true,
  movies: []
};

render() {
  const {isLoading, movies} = this.state;
  return  <section className="container">
    { isLoading ? (
      <div className="loader">
        <span className="loader__text">Загрузка...</span>
      </div>
    ) : (
      <div className="movies">
        {movies.map((movie) => (
          <Movie 
            id={movie.id} 
            year={movie.year} 
            title={movie.title} 
            summary={movie.summary} 
            poster={movie.medium_cover_image}
            geners={movie.genres}
          />
        ))}
      </div>
    )}
  </section>
  }
}

export default Home;
