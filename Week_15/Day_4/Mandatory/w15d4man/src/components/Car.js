import React, {Component} from 'react';
import Garage from './Garage';

class Car extends Component{
    constructor(props) {
        super(props)
        const {name, model} = this.props.carinfo
        this.state = {
            name: name,
            model: model,
            color: 'white'
        }
    }

    render() {
        const {name, model, color} = this.state
        return (
            <header>
                <Garage size='small'/>
                <p>This car is {color} "{name} {model}"</p>
            </header>
        )
    }
}

export default Car