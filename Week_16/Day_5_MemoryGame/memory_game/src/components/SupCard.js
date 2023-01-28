import Card from 'react-bootstrap/Card';

const SupCard = (props) => {
    const {hero} = props;
    return (
        <div key={hero.id} 
             className='hero-card' 
             onClick={() => props.handleClick(hero.id)}>
            <div className='image-container'>
                <img src={hero.image} alt="hero_img" />
            </div>
            <p><b>Name: </b>{hero.name}</p>
            <p><b>Occupation: </b>{hero.occupation}</p>
        </div>
    )
}

export default SupCard