import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// components
import Header from './components/header/header';
import NewsList from './components/news_list/news_list_item';




class App extends Component{

    constructor(){
        super()
        this.state ={
            tiktok : []
        }
    }


componentDidMount(){
    const Users = fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({tiktok: users}))
}


    render(){
        return (
            <div>
                <Header />
                <NewsList  user = {this.state.tiktok} />
                {/* {this.state.tiktok.map( tiktok => ( <h3 key={tiktok.id}> { tiktok.name} </h3>))} */}
            </div>
            )
    }
}




ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
document.getElementById('root'));
