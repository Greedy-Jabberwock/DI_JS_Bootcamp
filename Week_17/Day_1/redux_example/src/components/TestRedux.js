import {Component} from 'react';
import TestHeader from './TestHeader';

import { connect } from 'react-redux';
import { changeHeader, changeSubheader } from '../redux/actions';

class TestRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Redux',
            text_two: 'Welcome to the Redux'
        };
    };

    render () {
        const {
            head, 
            changeHeader,
            changeSubheader
            } = this.props;
        return (
            <>
                <h1>{head}</h1>
                <div>
                    Change header: <input type="text" onChange={changeHeader}/>
                    Change Subheader: <input type="text" onChange={changeSubheader}/>
                </div>
                <TestHeader/>
            </>
        )
    };
};


const mapStateToProps = (state) => {
    return {
        head: state.header
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeHeader: e => dispatch(changeHeader(e.target.value)),
        changeSubheader: e => dispatch(changeSubheader(e.target.value))
    }
} 
export default connect(mapStateToProps, mapDispatchToProps)(TestRedux);