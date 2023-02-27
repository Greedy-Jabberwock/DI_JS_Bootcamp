import { useSelector, useDispatch } from 'react-redux';
import {incr, decr, incr_odd, incr_async} from '../redux/actions';

const Counter = () => {

    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    console.log(count);
    return (
        <div>
            <span>Clicked: {count} times</span>
            <button onClick={() => dispatch(incr())}>+</button>
            <button onClick={() => dispatch(decr())}>-</button>
            <button onClick={() => dispatch(incr_odd())}>Increment if odd</button>
            <button onClick={() => dispatch(incr_async())}>Increment async</button>
        </div>
    )
}

export default Counter;