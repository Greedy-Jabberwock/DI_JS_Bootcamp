const User = (props) => {
    const {users} = props;
    const {name, email} = users;
    return (
        <div>
            <p>{name}</p>
            <p>{email}</p>
        </div>
    )
}

export default User