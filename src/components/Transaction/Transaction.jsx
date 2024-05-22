import css from '../TransactionHistory/TransactionHistory.module.css'
const Transaction = ({ type, amount, currency }) => {
  return (
    <tr className={css.row}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default Transaction;
