import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import './App.css';

// Route에는 2가지의 props를 전달할 수 있음 >> 1-URL을 위한 path props, 2-URL에 맞는 컴포넌트를 불러주기 위한 component props
// exact={true} : path props가 정확히 그 path인 경우에만 출력되도록 하는 속성

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
