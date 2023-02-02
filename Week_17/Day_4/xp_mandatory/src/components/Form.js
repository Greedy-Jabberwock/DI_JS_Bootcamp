import { useSelector, useDispatch } from "react-redux";
import { addTransaction, editTransaction, nullChosen } from "../actions";

const Form = () => {
    const FIELDS = {
        acc_num: 'acc_num',
        FSC: 'FSC',
        acc_holder: 'acc_holder',
        amount: 'amount'
    }

    const chosen = useSelector(state => state.chosen)
    const dispatch = useDispatch();

    const handleSubmit = e => {
        console.log('Handle acc_num: ', e.target.dataset.id === '0');
        e.preventDefault();
        const t = e.target;
        const new_data = {
            [FIELDS.acc_num]: t.acc_num.value,
            [FIELDS.FSC]: t.FSC.value,
            [FIELDS.acc_holder]: t.acc_holder.value,
            [FIELDS.amount]: t.amount.value
        }
        if (e.target.dataset.id === '0') {
            console.log('New data to add: ', new_data);
            dispatch(addTransaction(new_data));
        } else {
            console.log('Data to edit: ', chosen);
            console.log('New data to edit: ', new_data);
            dispatch(editTransaction(chosen.id, new_data))
            dispatch(nullChosen())
            t.acc_num.value = ''
            t.FSC.value = ''
            t.acc_holder.value = ''
            t.amount.value = ''
        }
    }

    return (
        <>
            <h1>Financial Transactions</h1>
            <form
                onSubmit={e => handleSubmit(e)} 
                data-id={chosen ? chosen.id : 0}>
                <input type="text" 
                       name={FIELDS.acc_num}  
                       defaultValue={chosen ? chosen[FIELDS.acc_num] : ''}
                       placeholder="Account number"/>
                <input type="text" 
                       name={FIELDS.FSC} 
                       defaultValue={chosen ? chosen[FIELDS.FSC] : ''}
                       placeholder="FSC"/>
                <input type="text" 
                       name={FIELDS.acc_holder} 
                       defaultValue={chosen ? chosen[FIELDS.acc_holder] : ''}
                       placeholder="Account holder"/>
                <input type="text" 
                       name={FIELDS.amount} 
                       defaultValue={chosen ? chosen[FIELDS.amount] : ''}
                       placeholder="Amount"/>
                <input type="submit" value='Submit'/>
            </form>
        </>
    )
}

export default Form;