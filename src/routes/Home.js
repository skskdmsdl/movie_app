import React from 'react';
// props가 내가 원하는 props인지 확인하기 위해 prop-types 설치 & import → npm i prop-types
import PropTypes from "prop-types"; 
// npm i axios를 통해 axios 설치
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  // async 비동기(기다려라)
  getMovies = async() => {
    // 함수 내부에 await 뭘 기다리길 원해? axios? 응(완료까지 시간이 좀 필요하기에 await사용)
    // movies.data.data를 아래처럼 나타낼 수 있음
    const { 
      data: { 
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    // movies:movies를 movies로 해도 자바스크립트가 이해함
    this.setState({ movies, isLoading: false });
    
    console.log(movies);
  }
  componentDidMount() {
    this.getMovies();
  };
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div> 
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie 
                key={movie.id}
                id={movie.id}
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image} 
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  };
}
  

export default Home;
