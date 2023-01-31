import './Search.css'
import { Component } from "react";
import { connect } from 'react-redux';
import { changeSearchTerm, searchTerm } from '../actions/index'

class Search extends Component {
    componentDidUpdate() {
        this.props.searchTerm(this.props.search)
    };

    render() {
        const { changeHandler } = this.props
        return(
            <div className="Search" onChange={changeHandler}>
                <input type="text" />
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        search: state.searchReducer.search
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeHandler: e => dispatch(changeSearchTerm(e.target.value)),
        searchTerm: (text) => dispatch(searchTerm(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Search);