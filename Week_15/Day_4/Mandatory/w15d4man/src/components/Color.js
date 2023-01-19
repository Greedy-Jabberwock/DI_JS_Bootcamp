import React, { Component } from "react";

class Color extends Component {
    constructor() {
        super();
        this.state = {favoriteColor: 'red'};
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({favoriteColor: 'yellow'});
        }, 5000)
    };

    changeColor = () => {
        this.setState({favoriteColor: 'blue'});
    }

    render() {
        return (
            <div>
                <h3>My favorite color is <i>{this.state.favoriteColor}</i></h3>
                <button onClick={this.changeColor}>Change color</button>
            </div>
        );
    };
};

export default Color;