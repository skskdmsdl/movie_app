import React from "react";
import PropTypes from "prop-types";

// movie컴포넌트는 state를 가지고 있지 않기 때문에 class 컴포넌트일 필요 없음(function 컴포넌트 사용)
function Movie({year, title, summary, poster}){
    return (
        <div class="movies__movie">
            <img src={poster} alt={title} title={title} />
            <div class="movie__data">
                <h3 class="movie__title">{title}</h3>
                <h5 class="movie__year">{year}</h5>
                <p class="movie__summary">{summary}</p>
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
};

export default Movie;