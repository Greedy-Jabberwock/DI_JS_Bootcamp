import React, {Component} from "react";

class Phone extends Component {
    constructor() {
        super();
        this.state = {
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
        };
    };

    changeColor = () => {
        this.setState({color: 'blue'});
    }

    render() {
        const {brand, model, color, year} = this.state;
        return (
            <div>
                <h3>My phone is a {brand}</h3>
                <p>It is a {color} {model} from {year}</p>
                <button onClick={this.changeColor}>Change color</button>
            </div>
        );
    };

};

export default Phone;