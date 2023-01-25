import './FormInfo.css'

const FormInfo = (props) => {

    const {f_name, l_name, age, 
        sex, destination, nuts_free, 
        lactose_free, vegan} = props.state;
    const food_options = [
        {message: 'Nuts free' , free: nuts_free},
        {message: 'Lactose free', free: lactose_free},
        {message: 'Vegan food', free: vegan}
    ];

    return (
    <section>
        <p className="bold">Name: {f_name} {l_name}</p>
        <p className="bold">Age: {age}</p>
        <p className="bold">Sex: {sex}</p>
        <p className="bold">Destination: {destination}</p>
        <p className="bold">Dietary restrictions: </p>
        <ul>
            {food_options.map((item, index) => {
                return <li key={index}>{item.message}: {item.free ? 'Yes' : 'No'}</li>;
            })}
        </ul>
    </section>
    )
}

export default FormInfo;