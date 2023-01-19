import React, {Component} from "react";
import Language from "./Language";

class Languages extends Component{
    constructor(){
        super();
        this.state = {
            languages : [
                {name: "Php", votes: 0},
                {name: "Python", votes: 0},
                {name: "JavaSript", votes: 0},
                {name: "Java", votes: 0}
            ]
          };
    };

    render() {
        return (
            <div>
                {this.state.languages.map((item, index) => {
                    return (
                        <div key={index}>
                            <Language item={item}/>
                        </div>
                    )
                })}
            </div>
        )
    }
};

export default Languages;