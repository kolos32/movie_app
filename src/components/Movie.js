import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css"

function Movie({id, year,title,summary,poster,genres}) {
    return (
    <Link to={{
        pathname: `movie/${id}`,
        stat: {
            year,
            title,
            summary,
            poster,
            genres,
        },
    }}>
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__column">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">
                {genres.map((genre,index) => {return <li key={index} className="genres__genre">{genre}</li>})}
            </ul>
            <p className="movie__summary">{summary.slice(0,250) + (summary.length > 250 ? '...':'')}</p>
            </div>
        </div>
    </ Link>
    );
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired
}

export default Movie;