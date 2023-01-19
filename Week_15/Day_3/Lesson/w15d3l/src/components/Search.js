const Search = (props) => {
    return (
        <div>
            <input type="text" onChange={props.myFunction}/>
            <button onClick={props.handleClick}>Search</button>
        </div>
    )
}

export default Search