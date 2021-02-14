import React from "react";
import PropTypes from "prop-types";

// movie컴포넌트는 state를 가지고 있지 않기 때문에 class 컴포넌트일 필요 없음(function 컴포넌트 사용)
function Movie({id, year, title, summary, poster}){
    return <h4>{title}</h4>;
};

Movie.prototype = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
};

export default Movie;