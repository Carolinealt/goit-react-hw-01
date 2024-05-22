// import css from "./TransactionHistory.module.css";
// import clsx from "clsx";
import Transaction from "../Transaction/Transaction";

const TransactionHistory = ({ items }) => {
  const arr = items.map((item) => {
    return (
      <Transaction
        key={item.id}
        type={item.type}
        amount={item.amount}
        currency={item.currency}
      />
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{arr}</tbody>
    </table>
  );
};

export default TransactionHistory;
