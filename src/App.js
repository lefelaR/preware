import React, { Component } from "react";
import ReactDom from "react-dom";
// import { Route } from 'react-router';
import Nav from "./components/nav";
import Search from "./components/SearchArea";
import MovieList from './components/movie_list';
import Pagination from './components/pagination';

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
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apikey}&query=${this.state.SearchTerm}`)
            .then((data) => data.json())
            .then((data) => {
                this.setState({
                    movies: [...data.results],
                    totalResulsts: data.total_results
                },()=>console.log(data.results));
            });
    }

    handleChange = (e) => {
        this.setState({ SearchTerm: e.target.value });
    };

    handleClick = (e) =>{
      this.setState({ SearchTerm: e.target.value });
    };


    nextPage = (pageNumber) => {
        fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=${this.apikey}&query=${this.state.SearchTerm}&page=${pageNumber}`)
            .then((data) => data.json())
            .then((data) => {
                this.setState({ movies: [...data.results], currentPage: pageNumber });
            })
    }


    viewMovieInfo = (id)=>{
      const filteredMovie = this.state.movie.filter(movie => movie.id == id)
      const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null
      this.setState({ CurrentMovie : filteredMovie});
    }

    closeMovieInfo =()=>{
        this.setState({CurrentMovie:null});
    }


    render() {
        const numberPages = Math.floor(this.state.totalResulsts / 20);
        return (
          <div className = "App" >
            <Nav / >
                {this.setState.CurrentMovie == null  }
                <div>
 <Search handleSubmit = { this.handleSubmit } handleChange = { this.handleChange } handleClick = { this.handleSubmit } />
                      
             <MovieList viewMovieInfo = { this.state.movies } /> </div> : <MovieInfo closeMovieInfo={this.closeMovieInfo} /> 
             <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage} />
            {
                this.state.totalResulsts > 10 ? < Pagination pages = { numberPages }
                nextPage = { this.nextPage }
                 currentPage = { this.state.currentPage }/> : "" }
                </div>
            );
        }
    }

    export default App;
