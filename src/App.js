import React from 'react';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  componentDidMount() {
    // 영화 데이터 로딩!
    // setTimeout() 함수 : 첫 번째 인자로 전달한 함수를 두 번째 인자로 전달한 값(밀리초) 후에 실행하는 함수
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>{isLoading ? 'Loading...' : 'We are ready'}</div>
    );
  }
}

export default App;
