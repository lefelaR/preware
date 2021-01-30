import React, { Component } from "react";
import ReactDom from "react-dom";
// import { Route } from 'react-router';
import Nav from "./components/nav";
import Search from "./components/SearchArea";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchTerm: '',
    };
    console.log(process.env);
    this.apikey = process.env.REACT_APP_API;
    //REACT_APP_API = 278577cd4ce20e2744a90a8340e969b3
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch( 
      `https://api.themoviedb.org/3/movie/550?api_key=${this.apikey}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        // this.setState({ movies: [...data] });
      })
  }

  handleChange = (e) => {
    this.setState({ SearchTerm: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Search 
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
