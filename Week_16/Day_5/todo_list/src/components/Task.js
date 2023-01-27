const Task = (props) => {
    const {id, task} = props.task;
    return(
        <>
            <div className='Task'>
                <p id={id} className="TaskText" onClick={props.removeItem}>{task}</p>
            </div>
        </>
        
    )
};

export default Task;