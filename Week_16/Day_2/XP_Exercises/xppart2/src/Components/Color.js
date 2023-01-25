import React, { Component } from "react";

class Color extends Component {
    constructor() {
        console.log('contructor()');
        super();
        this.state = {
            favoriteColor: 'red',
            prevColor: null,
            show: true
        };
    };

    componentDidMount() {
        console.log('componentDidMount()');
        setTimeout(() => {
            this.setState({favoriteColor: 'yellow'});
        }, 5000)
    };

    changeColor = () => {
        this.setState({favoriteColor: 'blue'});
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate()');
        // return false;
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevState) {
            return prevState;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot && snapshot.favoriteColor !== this.state.favoriteColor) {
            this.setState({prevColor: snapshot.favoriteColor});
        }
    }

    hideHeader = () => {
        this.setState({show: false});
    }

    render() {
        console.log('render()');
        return (
            <>
                {this.state.show ? <Child /> : ''}
                <button onClick={this.hideHeader}>Delete header</button>
                <h2>My favorite color is <i>{this.state.favoriteColor}</i></h2>
                {this.state.prevColor ? <p>Previous color: {this.state.prevColor}</p> : ''}
                <button onClick={this.changeColor}>Change color</button>
            </>
        );
    };
};

class Child extends Component {

    componentWillUnmount() {
        alert('The component named Header is about to be unmounted');
    }

    render() {
        return (
            <header>
                <h1>Hello world!</h1>
            </header>
        )
    }
}

export default Color;