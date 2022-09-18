import Card from './Card';

export default function CardList(props) {
    const {movies} = props;

    return (
        <div className="row">
            <div className='grid'>
                {movies.map(movie => {
                    return <Card key={movies.imdbID} {...movie}/>
                })}
            </div>
        </div>
    );
}