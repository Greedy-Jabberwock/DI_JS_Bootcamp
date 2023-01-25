import { Component } from "react";
import Form from './Form.js';
import FormInfo from "./FormInfo.js";

class FormHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            f_name: '',
            l_name: '',
            age: '',
            sex: '',
            destination: '',
            nuts_free: false,
            lactose_free: false,
            vegan: false
        };
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:[e.target.value]});
        console.log(this.state);
    }

    handleDiet = (e) => {
        this.setState({[e.target.name]: (e.target.checked)})
        console.log(this.state);
    }

    render() {
        
        return (
            <>
                <Form  handleChange={this.handleChange} handleDiet={this.handleDiet}/>
                <hr/>
                <FormInfo state={this.state}/>
            </>
        )
    }
}

export default FormHandler