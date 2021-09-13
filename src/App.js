import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';
import './App.css';

// Route에는 2가지의 props를 전달할 수 있음 >> 1-URL을 위한 path props, 2-URL에 맞는 컴포넌트를 불러주기 위한 component props
// exact={true} : path props가 정확히 그 path인 경우에만 출력되도록 하는 속성
// a 엘리먼트의 href 속성은 페이지 전체를 다시 그리기 때문에, 필요한 부분만 다시 그려주는 react의 장점을 활용하기 힘듬 >> Link 컴포넌트 사용
// Link, Router 컴포넌트는 반드시 HashRouter 안에 포함되어야함

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
