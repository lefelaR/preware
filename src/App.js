import React, { Component } from "react";


// import { Route } from 'react-router';
import Nav from "./components/nav";
import Search from "./components/SearchArea";
import MovieList from './components/movie_list';
import Trending from './components/trending_movies';


class App extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            SearchTerm: '',
            totalResulsts: 0,
            currentPage: 1
        };
        this.apikey = process.env.REACT_APP_API;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=278577cd4ce20e2744a90a8340e969b3&query=${this.state.SearchTerm}`)
            .then((data) => data.json())
            .then((data) => {
                debugger
                this.setState({
                    movies: [...data.results],
                    totalResulsts: data.total_results
                });
            })
    }

    handleChange = (e) => {
        this.setState({ SearchTerm: e.target.value });
    };

    handleClick = (e) => {
        this.setState({ SearchTerm: e.target.value });
    };


    nextPage = (pageNumber) => {
        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${this.apikey}&query=${this.state.SearchTerm}&page=${pageNumber}`
        )
            .then((data) => data.json())
            .then((data) => {
                this.setState({ movies: [...data.results], currentPage: pageNumber });
            })
    }

    render() {
        const numberPages = Math.floor(this.state.totalResulsts / 20);
        return (
            <div className="App" >
                <Nav />
                < Search handleSubmit={this.handleSubmit} handleChange={this.handleChange} handleClick={this.handleSubmit} />

                <Trending trendingMovies={this.state.trendingMovies} />

                <MovieList movies={this.state.movies} />
            </div>
        );
    }
};

export default App;
