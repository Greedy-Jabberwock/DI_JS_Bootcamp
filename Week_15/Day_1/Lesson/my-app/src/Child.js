const Child = (props) => {
    console.log('props => ', props);
    const {name, email} = props
    return (
        <div>
            <h1>Child component</h1>
            <p>{name}</p>
            <p>{email}</p>
        </div>
    );
}

export default Child