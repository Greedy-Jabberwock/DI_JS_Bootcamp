import {Component} from 'react';

export default class Box extends Component {
    state = { fluffy: '' };

    letsChange = event => {
        this.setState({
            fluffy: event.target.value,
        });
        console.log(event.target.value);
    };

    render() {
        return (
            <label>
                <input 
                    type="text"
                    value={this.state.fluffy}
                    onChange={this.letsChange} 
                />
            </label>
        );
    }
}