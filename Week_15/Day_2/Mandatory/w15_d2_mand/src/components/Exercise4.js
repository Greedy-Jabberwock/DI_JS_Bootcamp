import './Exercise4.css'

const Exercise4 = () => {
    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
    return (
        <div>
            <div>
                {/* Part I */}
                {/* <h1 style={{color:'red', 'background-color':'lightblue'}}> */}
                {/* Part II */}
                {/* <h1 style={style_header}> */}
                {/* Part III */}
                <h1 className="para">
                Header</h1>
            </div>
            <div>
                <p>Paragraph</p>
            </div>
            <div>
                <a href="#">Link</a>
            </div>
            <div>
                <h3>Form</h3>
                <p>Enter something</p>
                <form>
                    <input type="text" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div>
                <img src="logo192.png" alt="" />
            </div>
            <div>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                </ul>
            </div>
        </div>
    )
}

export default Exercise4