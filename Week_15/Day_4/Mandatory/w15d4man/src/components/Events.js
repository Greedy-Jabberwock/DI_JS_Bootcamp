import React, {Component} from "react";

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            buttonText: 'On'
        };
    }

    clickMe = () => {
        alert('You clicked the button!')
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            alert(`The enter key was pressed, your input is "${e.target.value}"`);
            e.target.value = ''
        }
    }

    handleClick = () => {
        const buttonText = this.state.isToggleOn ? 'On' : 'Off'
        this.setState({
            isToggleOn: !(this.state.isToggleOn),
            buttonText: buttonText
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.clickMe}>Click me</button>
                <br/>
                <input type="text" onKeyPress={this.handleKeyPress} placeholder='Enter something, click Enter'/>
                <br/>
                <div>
                    <h5>Toggling:</h5>
                    <button onClick={this.handleClick}>{this.state.buttonText}</button>
                </div>
            </div>
        )
    }
}

export default Events