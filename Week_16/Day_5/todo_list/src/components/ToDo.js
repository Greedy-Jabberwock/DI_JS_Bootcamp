import {Component} from 'react';
import axios from 'axios'
import Task from './Task';

class ToDo extends Component {
    constructor() {
        super();
        this.state = {
            tasks: []
        };
        this.URL = 'http://localhost:3001/api/'
    };

    getData = async () => {
        const res = await axios(`${this.URL}/tasks`)
        this.setState({tasks: res.data})
    }

    componentDidMount() {
        this.getData();
    }

    keyPressHandler = async (e) => {
        if (e.key === 'Enter') {
            const new_data = {task: e.target.value};
            await axios.post(`${this.URL}/add`, new_data)
            e.target.value = '';
            this.getData();
        };
    }

    removeItem = async (e) => {
        await axios.post(`${this.URL}/remove`, {id: e.target.id});
        this.getData();
    } 

    render() {
        const {tasks} = this.state;
        return (
            <>
                <h1 className='AlignCenter'>ToDo's</h1>
                <section>
                    {tasks.length > 0 ? tasks.map(item => {
                        return <Task task={item} removeItem={this.removeItem} />
                    }) : <p>There are no tasks</p>}
                </section>
                <p className='AddTask'>Add a new todo:</p>
                <input type="text" onKeyDown={this.keyPressHandler}/>
            </>
        );
    };
};

export default ToDo;