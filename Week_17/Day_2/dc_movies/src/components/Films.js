import {Component} from 'react';

import {connect} from 'react-redux';

import { getFilm } from '../actions';

class Films extends Component {
    render() {
        const {films, getFilm} = this.props;
        return (
            <div className='flex vert'>
                <h3 className='App'>Movie list</h3>
                <div>
                    {films.map((film, index) => {
                        return (
                            <div key={index} className='flex betw'>
                                <span>{film.title}</span>
                                <button data-id={index} onClick={getFilm}>Details</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        films: state.films
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getFilm: e => dispatch(getFilm(e.target.dataset.id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Films);