import React, {Component} from "react";
import User from "./User";
import Search from "./Search";

class Users extends Component{
    constructor() {
        super()
        this.state = {
            users: [],
            search: '',
            text: ''
        }
    }

    getUsers = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        this.setState({users: data})
    }

    componentDidMount() {
        console.log('Users Mountanted');
        this.getUsers();
    }

    
    handleChange = (e) => {
        this.setState({search: e.target.value})
    }

    handleClick = () => {
        this.setState({text: this.state.search})
    }

    render() {
        const {users, text} = this.state

        const filterUsers = users.filter(item => {
            return item.name.toLowerCase().includes(text.toLowerCase());
        })

        return (
            <div>
                <Search myFunction={this.handleChange} handleClick={this.handleClick}/>
                <h5>Users: </h5>
                <div>
                    {
                        filterUsers.map((item, index) => {
                            return (
                                <User user={item} key={index}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Users