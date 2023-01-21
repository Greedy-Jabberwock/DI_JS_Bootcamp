import React, {Component} from 'react';

class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            operation: 'Adding',
            result: 0
        }
    }

    changeHandler = (e) => {
        this.setState({operation: e.target.value})
    }

    handleOperation = (e) => {
        try {
            e.preventDefault();
            const form = document.forms.calc;
            const nums = [parseInt(form.f_num.value), parseInt(form.l_num.value)];
            if (!nums[0] || !nums[1]) throw TypeError
            const operation = form.operation.value;
            let res;
            if (operation === 'Adding') {
                res = nums[0] + nums[1];
            } else if (operation === 'Substracting') {
                res = nums[0] - nums[1];
            } else if (operation === "Multiplying") {
                res = nums[0] * nums[1];
            } else if (operation === 'Dividing') {
                res = nums[0] / nums[1];
            }
            this.setState({
                // operation: form.operation.value,
                result: res
            })
        } catch (error) {
            alert('Only digits!')
        }

        
    }

    render() {
        const style = {margin: '5px'}
        return (
            <section>
                <form name='calc' onSubmit={this.handleOperation}>
                    <h4>{this.state.operation} operation</h4>
                    <input type="text" name='f_num' style={style}/>
                    <select style={style} name='operation' onChange={this.changeHandler}>
                        <option value="Adding" key="add">+</option>
                        <option value="Substracting" key="substract">-</option>
                        <option value="Multiplying" key="multiply">*</option>
                        <option value="Dividing" key="divide">/</option>
                    </select>
                    <input type="text" name='l_num' style={style}/>
                    <div style={style}>
                        <input type="submit" value='Result'/>
                    </div>
                </form>
                <div>{this.state.result}</div>
            </section>
        )
    }
};

export default Calculator;