import { useDispatch } from "react-redux";
import { searchRobot } from "../redux/actions";
import './Search.css'

const Search = (props) => {
    const dispatch = useDispatch()
    return (
        <section className="Search">
            <input type="text"
                   placeholder="Search the robot" 
                   onChange={(e) => 
                dispatch(searchRobot(e.target.value.toLowerCase()))} />
        </section>
    )
};

export default Search;