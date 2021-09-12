import React from 'react';
import PropTypes from 'prop-types';

// Movie 컴포넌트는 state가 필요하지 않기 때문에 함수형 컴포넌트로 작성
function Movie({ id, title, year, summary, poster }) {
    return <h4>{title}</h4>;
}

// Movie에 넘어오는 영화 데이터를 정의하고 관리하기 위해 prop-types 사용
Movie.propTypes = { 
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
};

export default Movie;