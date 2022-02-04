import React from "react";
import propTypes from "prop-types";
import "./Movie.css"

function Movie({year,title,summary,poster,geners}) {
    return <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__column">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5> 
            <ul className="movie__genres">
                {geners.map((genre,index) => {
                    return (<li key={index} className="genres__genre">{genre}</li>);
                    })}
            </ul>
            <p className="movie__summary">{summary.slice(0,480) + 
            (summary.length > 480 ? '...' : '')}
            </p>
        </div>
    </div>; 
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    geners: propTypes.arrayOf(propTypes.string).isRequired
}

export default Movie;