import React from "react";

class ChildClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {name, email} = this.props
        return (
            <div>
                <h2>ChildClass component</h2>
                <p>{name}</p>
                <p>{email}</p>
            </div>
        )
    }
}

export default ChildClass