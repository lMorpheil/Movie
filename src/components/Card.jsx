export default function Card(props) {
    const { Title: title, Year: year, imdbID: id, Type: type, Poster: poster } = props;
    return (
        <div className="card" id={id}>
            <div className="card-image">
                <img src={poster} />
                    <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
            </div>
            <div className="card-content">
                <span className="card-title">{title}</span>
                <p>{year} <span className="right">{type}</span></p>
            </div>
        </div>
    );
}