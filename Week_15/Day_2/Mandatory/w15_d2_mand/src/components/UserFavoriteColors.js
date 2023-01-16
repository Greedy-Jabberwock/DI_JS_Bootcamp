const UserFavoriteColors = (props) => {
    const {color, index} = props;
    return (
        <li key={index}>{color}</li>
    )
}

export default UserFavoriteColors