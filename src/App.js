import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    // getMovies 함수는 시간이 필요하다는 것을 async로 표시, 실행 시간이 필요한 대상에 await 표시
    // axios.get() 함수의 인자에 URL을 전달하여 API를 호출
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }

  componentDidMount() {
    // 영화 데이터 로딩!
    // setTimeout() 함수 : 첫 번째 인자로 전달한 함수를 두 번째 인자로 전달한 값(밀리초) 후에 실행하는 함수
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 6000);
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>{isLoading ? 'Loading...' : 'We are ready'}</div>
    );
  }
}

export default App;
