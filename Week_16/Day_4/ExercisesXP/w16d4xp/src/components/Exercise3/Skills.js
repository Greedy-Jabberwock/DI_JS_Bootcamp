import { Component } from "react";

class SocialMedias extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {Skills} = this.props;
        return (
            <section>
                {Skills.map((item, index) => {
                    return (
                        <>
                            <h4>{item.Area}</h4>
                            <ul>
                                {item.SkillSet.map((skill, index) => {
                                    return <li key={index}>{skill.Name}</li>
                                })}
                            </ul>
                        </>
                    )
                })}
            </section>
        )
    }
}

export default SocialMedias;