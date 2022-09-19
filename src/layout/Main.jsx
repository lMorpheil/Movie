import { React, Component } from 'react';
import CardList             from '../components/CardList';
import Search               from '../components/Search';
import Preloader            from '../components/Preloader';

const API_KEY = process.env.REACT_APP_API_KEY;

export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            loading: true,
        };
        
        this.searchMovie = this.searchMovie.bind(this);
    }
    
    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
    }

    searchMovie(str, type) {
        this.setState({loading: true})
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type === 'all' ? '' : `&type=${type}`}`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
    }
    
    render() {
        const {movies, loading} = this.state;

        return (
            <main className="container content">
                <Search searchMovie = {this.searchMovie} />
                {
                    loading ? 
                    ( <Preloader /> ) : ( <CardList  movies={this.state.movies} /> )

                }
            </main>
        );
    }
}
//http://www.omdbapi.com/apikey.aspx?VERIFYKEY=780a31de-dc15-4d9e-95b7-30382f8e679e