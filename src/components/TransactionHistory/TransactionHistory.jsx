import style from './TransactionHistory.module.css';

import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={style.transactionHistory}>
      <thead>
        <tr className={style.titleTable}>
          <th className={style.titleItem}>Type</th>
          <th className={style.titleItem}>Amount</th>
          <th className={style.titleItem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <tr key={item.id} className={style.transaction}>
              <td className={style.transactionItem}>{item.type}</td>
              <td className={style.transactionItem}>{item.amount}</td>
              <td className={style.transactionItem}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
