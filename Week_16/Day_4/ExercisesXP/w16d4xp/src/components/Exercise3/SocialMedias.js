import { Component } from "react";

class SocialMedias extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {SocialMedias} = this.props;
        return (
            <section>
            <h4>Social Medias</h4>
            <ul>
                {SocialMedias.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>   
            </section>
        )
    }
}

export default SocialMedias;