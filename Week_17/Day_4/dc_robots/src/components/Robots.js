import { useSelector } from "react-redux";
import RoboCard from "./RoboCard";
import './Robots.css'

const Robots = () => {
    const robots = useSelector(state => state.robots
                        .filter(robot => robot
                            .name.toLowerCase()
                            .includes(state.search)));
    return (
        <section className="album">
            {
                robots 
                ? 
                robots.map(robot => <RoboCard robot={robot}/>)
                : 
                <div>Nothing to show, sorry.</div>
            }
        </section>
    )
};

export default Robots;