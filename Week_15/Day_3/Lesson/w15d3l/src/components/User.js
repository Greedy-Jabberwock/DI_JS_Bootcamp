const User = (props) => {
    const {name, email, username} = props.user
    return (
        <div key={props.key} className="tc grow bg-light-green br3 pa3 ma2 shadow-5 dib">
            <img src={`https://robohash.org/${props.user.id}?size=100x100`} alt="" />
            <h5>{name}</h5>
            <p style={{fontSize: '12px'}}>{email}</p>
            <p style={{fontSize: '12px'}}>{username}</p>
        </div>
    )
}

export default User