import { useSelector, useDispatch } from 'react-redux';


const TestHeader = (props) => {

    const subheader = useSelector(state => state.subHeader)

    const dispatch = useDispatch()

    return (
        <>
            <p>{subheader}</p>
            <input type="text" placeholder="Change header" onChange={(e) => dispatch({type:'CHANGE_HEADER', payload: e.target.value})} />
            <input type="text" placeholder="Change subheader" onChange={(e) => dispatch({type: 'CHANGE_SUBHEADER', payload: e.target.value})} />
            <div>
                <button onClick={e => dispatch({type:'SUB_TO_HEAD'})}>Change header to Subheader</button>
            </div>
        </>
    )
};

export default TestHeader;