import { Card } from 'react-bootstrap';

const EmojiCard = (props) => {
    const {icon, name, amount} = props.card;
    console.log(props);
    return (
        <Card key={props.id} className='Card'>
            <Card.Header>
                <p><span>{icon}</span><span>{name}</span></p>
            </Card.Header>
            <Card.Body>
                <h1>{amount}</h1>
            </Card.Body>
        </Card>
    )
} 

export default EmojiCard;