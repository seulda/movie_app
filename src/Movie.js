import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// Movie 컴포넌트는 state가 필요하지 않기 때문에 함수형 컴포넌트로 작성
function Movie({ title, year, summary, poster }) {
    return (
        <div class="movie">
            <img src={poster} alt={title} title={title} />
            <div class="movie__data">
                <h3 class="movie__title">{title}</h3>
                <h5 class="movie__year">{year}</h5>
                <p class="movie__summary">{summary}</p>
            </div>
        </div>
    );
}

// Movie에 넘어오는 영화 데이터를 정의하고 관리하기 위해 prop-types 사용
Movie.propTypes = { 
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
};

export default Movie;