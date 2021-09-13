import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component {

  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    // getMovies 함수는 시간이 필요하다는 것을 async로 표시, 실행 시간이 필요한 대상에 await 표시
    // axios.get() 함수의 인자에 URL을 전달하여 API를 호출하고, 그 데이터를 할당 (구조분해할당)
    const {
      data: {
        data: { movies },
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?soty_by=rating");
    // this.setState({ movies: movies }); 왼쪽 movies는 state, 오른쪽 movies는 구조분해할당으로 얻은 데이터 변수
    // 객체 키와 대입 변수 이름이 같으면 축약 가능(movies)
    this.setState({ movies, isLoading: false });
  }

  // Mount로 분류하는 생명주기 함수 3가지(순서별) : 1.constructor()함수 -> 2.render()함수 -> 3.componentDidMount()함수
  componentDidMount() {
    // 영화 데이터 로딩!
    this.getMovies();
  }

  // class가 아닌 className으로 작성하는 이유 : HTML의 class와 Javascript의 class라는 이름이 겹치면 react가 혼란.
  // react는 JSX를 HTML로 변환하면서 className을 class로 다시 바꿈
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">'Loading...' </span>
          </div>
          ) : (
            <div className="movies">
              {
                movies.map((movie) => {
                  return (
                    <Movie 
                      key={movie.id}
                      id={movie.id}
                      year={movie.year}
                      title={movie.title}
                      summary={movie.summary}
                      poster={movie.medium_cover_image}
                      genres={movie.genres}
                    />
                  );
                })
              }
            </div>
          )
        }
      </section>
    );
  }

}

export default App;
