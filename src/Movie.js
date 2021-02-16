import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// movie컴포넌트는 state를 가지고 있지 않기 때문에 class 컴포넌트일 필요 없음(function 컴포넌트 사용)
function Movie({year, title, summary, poster, genres}){
    return (
        <div className="movies__movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="genres">
                    {/* map은 index argument를 제공함!!  */}
                    {genres.map((genre, index) => ( 
                        <li key={index} className="genres__genre">{genre}</li>
                    ))}
                </ul>
                <p className="movie__summary">{summary}</p>
            </div>
        </div>
    );
};

Movie.prototype = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;