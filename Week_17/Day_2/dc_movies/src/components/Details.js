import { useSelector } from 'react-redux'

const Details = () => {
    const film = useSelector(state => state.currentFilm);
    console.log(film);
    return (
        <div className="flex vert">
            <div>
                <h3 className='App'>Movie</h3>
                {
                film ? 
                    (<div>
                        <p><span className='b'>Title: </span>{film.title}</p>
                        <p><span className='b'>Release date: </span>{film.releaseDate}</p>
                        <p><span className='b'>Rating: </span>{film.rating}</p>
                    </div>) 
                    : 
                    <p>Select movie</p>
                }   
            </div>
        </div>
    );
};

export default Details;