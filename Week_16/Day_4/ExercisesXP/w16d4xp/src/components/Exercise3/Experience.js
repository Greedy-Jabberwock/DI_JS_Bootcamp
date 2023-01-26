import { Component } from "react";
import { Link } from 'react-router-dom';

class Experience extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {Experience} = this.props;
        return (
            <>
                {Experience.map((item, index) => {
                    const {
                        companyName, 
                        logo, 
                        url} = item;
                    const {
                        title,
                        startDate,
                        location,
                        description
                    } = item.roles[0]
                    console.log(logo);
                    return (
                        <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <img src={logo} style={{width: '200px'}}/>
                            <Link to={url}>{companyName}</Link>
                            <p><b>{title}</b></p>
                            <p>{startDate} | {location}</p>
                            <p>{description}</p>
                        </section>
                    )
                })}
            </>
        )
    }
}

export default Experience;