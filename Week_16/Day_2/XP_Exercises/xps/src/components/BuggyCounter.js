import React, {Component} from "react";

class BuggyCounter extends Component {
    constructor() {
        super();
        this.state = {count: 0};
    }

    addOne = () => {
        this.setState({count: ++this.state.count});
    }

    render() {
        if (this.state.count >= 5) {
            throw Error('I crashed!');
        }
        return(
            <>
                <p onClick={this.addOne}>{this.state.count}</p>
            </>
        )
    }
}

export default BuggyCounter;