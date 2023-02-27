import { connect } from 'react-redux';
import { increase, decrease } from '../redux/actions';

const AgeCounter = (props) => {
    const {age, increase, decrease} = props;

    return (
        <div>
            <span>Your age: {age}</span>
            <div>
                <button onClick={increase}>Age UP</button>
                <button onClick={decrease}>Age DOWN</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {age: state.age};
};

const mapDispatchToProps = (dispatch) => {
    return {
        increase: () => dispatch(increase()),
        decrease: () => dispatch(decrease())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AgeCounter);