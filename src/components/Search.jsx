import {React, Component} from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: 'search',
            filter: 'all',
        };
        
        this.handelSearch = this.handelSearch.bind(this);
        this.handelRadio = this.handelRadio.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
    }
    
    handelSearch(ev) {
        this.setState({
            search: ev.target.value,
        })
    }
    
    handelRadio(ev) {
        this.setState(() => ({ filter: ev.target.value }), () => {
            this.props.searchMovie(this.state.search, this.state.filter)
        })
        
    }

    handelSubmit(e) {
        e.preventDefault();
        this.props.searchMovie(this.state.search, this.state.filter)
    }

    render() {
        const {search} = this.state;
        
        return (
            <form onSubmit={this.handelSubmit}>
                <div className="search__form-wrapper">
                    <input
                        className='search__input'
                        type="search"
                        onChange={this.handelSearch}
                        name="search"
                        value={search}
                        placeholder={search}
                    />
                    <button className="btn search-btn">Search</button>
                </div>
                <div className="search__radio-wrapper">
                    <label>
                        <input type="radio"
                               name="filter"
                               value="all"
                               onChange={this.handelRadio}
                               onClick={this.handelFilter}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input type="radio"
                               name="filter"
                               value="movie"
                               onChange={this.handelRadio}
                               onClick={this.handelFilter}
                        />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input type="radio"
                               name="filter"
                               value="series"
                               onChange={this.handelRadio}
                               onClick={this.handelFilter}
                        />
                        <span>Series Only</span>
                    </label>
                    
                </div>
            </form>
        );
    }
}