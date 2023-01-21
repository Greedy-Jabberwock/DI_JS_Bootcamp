import React, {Component} from 'react';

class Forms extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            age: null
        };
    };

    onChangeHandler = (e) => {
        console.log(e.target.value);
        if (e.key === 'Enter') {
            this.setState({username: e.target.value})
        }
    }

    submitForm = (e) => {
        e.preventDefault();
        const value = e.target.username.value;
        alert(`You are submitting as ${value}`);
        this.setState({username: value})
    } 

    render() {
        let header;
        if (this.state.username && this.state.age) {
            header = <h1>Hello {this.state.username} {this.state.age}</h1>
        }
        return ( 
            <div>
                {header} 
                <p>Enter your name: </p>
                <form onSubmit={this.submitForm}>
                    <input type="text" name='username' 
                        // onKeyPress={this.onChangeHandler}
                        />
                    <br/>
                    <input type="text" name='age'/>
                    <br/>
                    <input type="submit" value='Submit'/>
                </form>
            </div>
        );
    };
};

export default Forms;