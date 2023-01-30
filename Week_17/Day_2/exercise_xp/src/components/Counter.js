import { Component } from 'react';
import { connect } from 'react-redux';
import { increaseCount, decreaseCount } from '../actions';


class Counter extends Component {
    render() {
        const {count, addOne, decOne} = this.props;
        console.log(this.props);
        return (
            <div>
                <button onClick={decOne}>-</button>
                <span>{count}</span>
                <button onClick={addOne}>+</button>
            </div>
        )
    };
};

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addOne: e => dispatch(increaseCount()),
        decOne: e => dispatch(decreaseCount())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);