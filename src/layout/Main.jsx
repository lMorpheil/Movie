import { React, Component } from 'react';
import CardList             from '../components/CardList';
import Search               from '../components/Search';
import Preloader            from '../components/Preloader';

export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
        };
        
        this.searchMovie = this.searchMovie.bind(this);
    }
    
    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=932b04f6&s=matrix')
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}))
    }

    searchMovie(str, type) {
        fetch(`http://www.omdbapi.com/?apikey=932b04f6&s=${str}${type === 'all' ? '' : `&type=${type}`}`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search}))
    }
    
    render() {
        const {movies} = this.state;

        return (
            <main className="container content">
                <Search searchMovie = {this.searchMovie} />
                {
                    movies.length ? (
                        <CardList  movies={this.state.movies} />
                    ) : <Preloader />

                }
            </main>
        );
    }
}
//http://www.omdbapi.com/apikey.aspx?VERIFYKEY=780a31de-dc15-4d9e-95b7-30382f8e679e