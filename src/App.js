import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

// route props : 라우팅 대상이 되는 컴포넌트에 넘겨주는 기본 props. 직접 넘겨주지 않아도 기본으로 넘어가는 정보
// Route에는 2가지의 props를 전달할 수 있음 >> 1-URL을 위한 path props, 2-URL에 맞는 컴포넌트를 불러주기 위한 component props
// exact={true} : path props가 정확히 그 path인 경우에만 출력되도록 하는 속성
// route props의 history 키는 URL을 변경해주는 함수들이 있음. push, go, goBack, goForward가 있음. 
// history > push() : 지정한 URL로 리다이렉트

// a 엘리먼트의 href 속성은 페이지 전체를 다시 그리기 때문에, 필요한 부분만 다시 그려주는 react의 장점을 활용하기 힘듬 >> Link 컴포넌트 사용
// Link, Router 컴포넌트는 반드시 HashRouter 안에 포함되어야함

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}

export default App;
