import './Form.css'

const Form = (props) => {
    return (
        <form name='trip_info'>
            
        <input type="text" name='f_name' placeholder='First name' onInput={props.handleChange}/>
        <br/>
        <input type="text" name='l_name' placeholder='Last Name' onChange={props.handleChange}/>
        <br/>
        <input type="text" name='age' placeholder='Age' onChange={props.handleChange}/>
        <br/>

        <input type="radio" id='male' name='sex' value='male' onChange={props.handleChange}/>
        <label for='male'>Male</label>
        <br/>
        <input type="radio" id='female' name='sex' value='female' onChange={props.handleChange}/>
        <label for='female'>Female</label>
        <br/>

        <label className='bold'>Select your destination:</label>
        <br/>
        <select name='destination' onChange={props.handleChange}>
            <option value="" key="">--Choose your destination--</option>
            <option value="Japan" key="Japan">Japan</option>
            <option value="Thailand" key="Thailand">Thailand</option>
            <option value="Brazil" key="Brazil">Brazil</option>
        </select>
        <br/>

        <label className='bold'>Dietary restrictions:</label>

        <br/>
        <input type="checkbox" name='nuts_free' onChange={props.handleDiet}/>
        <label for='nuts_free'>Nuts free</label>
        <br/>
        <input type="checkbox" name='lactose_free' onChange={props.handleDiet}/>
        <label for='lactose_free'>Lactose free</label>
        <br/>
        <input type="checkbox" name='vegan' onChange={props.handleDiet}/>
        <label for='vegan'>Vegan</label>
        <br/>
        <input type="submit" name='Submit'/>
        
    </form>
    )
}

export default Form