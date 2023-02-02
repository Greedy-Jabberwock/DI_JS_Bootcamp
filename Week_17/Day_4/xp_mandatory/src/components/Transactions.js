import { useSelector, useDispatch } from 'react-redux';
import { chooseTransaction, deleteTransaction } from '../actions';

const Transactions = () => {
    const transactions = useSelector(state => state.transactions);
    const dispatch = useDispatch()
    return (
        <table>
            <tbody>
            {transactions ? transactions.map((item) => {
                return (
                    <tr key={item.id}>
                        <td>{item.acc_num}</td>
                        <td>{item.acc_holder}</td>
                        <td>{item.amount}</td>
                        <td>
                            <button onClick={() => dispatch(chooseTransaction(item.id))}>Edit</button>
                        </td>
                        <td>
                            <button onClick={() => dispatch(deleteTransaction(item.id))}>Delete</button>
                        </td>
                    </tr>
                )
        }) : <tr key="-"><td>There are no transactions</td></tr> }
            </tbody>
        </table>
    )
}
export default Transactions;