import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            {/* <Link to={{ pathname: '/about', state: { fromNavigation: true } }}>About</Link> */}
            {/* pathname은 URL, state는 route props에 보내줄 데이터 */}
        </div>
    );
}

export default Navigation;