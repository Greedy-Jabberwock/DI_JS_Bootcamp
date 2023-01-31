import './RoboCard.css'

const RoboCard = (props) => {
    const {name, email, id} = props.robot;
    return (
        <div className="robocard">
            <img src={`https://robohash.org/${id}?size=200x200`} alt="PhotoRobot" />
            <div>
                <p>{name}</p>
                <p>{email}</p>
            </div>
        </div>
    )
};

export default RoboCard;