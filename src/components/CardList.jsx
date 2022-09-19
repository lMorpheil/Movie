import Card from './Card';

export default function CardList(props) {
    const {movies = []} = props;

    return (
        <div className="row">
            <div className='grid'>
                {movies.length ? movies.map(movie => {
                    return <Card key={movies.imdbID} {...movie}/>
                }) : <h4>Ни чего не найдено</h4> }
            </div>
        </div>
    );
}