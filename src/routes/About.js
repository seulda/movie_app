import React from 'react';
import './About.css';

// route props : 라우팅 대상이 되는 컴포넌트에 넘겨주는 기본 props. 직접 넘겨주지 않아도 기본으로 넘어가는 정보

function About(props) {
    console.log(props);
    return (
        <div className="about__container">
            <span>
                "Freedom is the freedom to say that two plus two make four. If that is granted, all else follws."
            </span>
            <span>- George Orwell, 1984</span>
        </div>
    );
}

export default About;