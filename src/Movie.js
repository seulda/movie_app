import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// Movie 컴포넌트는 state가 필요하지 않기 때문에 함수형 컴포넌트로 작성
function Movie({ title, year, summary, poster, genres }) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul classname="novie__genres">
                    {genres.map((genre, index) => {
                        return <li key={index} className="movie__genre">{genre}</li>
                    })}
                </ul>
                <p className="movie__summary">{summary}</p>
            </div>
        </div>
    );
}

// Movie에 넘어오는 영화 데이터를 정의하고 관리하기 위해 prop-types 사용
// isRequired : 필수 값
Movie.propTypes = { 
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;