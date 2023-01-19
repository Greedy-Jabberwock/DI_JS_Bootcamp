import React, {Component} from 'react';
import './Language.css'

class Language extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: this.props.item.name,
            votes: this.props.item.votes
        };
    };

    addOne = () => {
        const new_votes = this.state.votes + 1
        this.setState({votes: new_votes})
    }

    render() {
        const {language, votes} = this.state;
        return (
            <div key={this.state.k} className='card'>
                <p>{votes}</p>
                <p>{language}</p>
                <p className='clickable' onClick={this.addOne}>Click Here</p>
            </div>
        );
    };
};

export default Language;