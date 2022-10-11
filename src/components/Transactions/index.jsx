import { useContext } from 'react';
import { WalletContext } from '../../WalletContext';
import { Link } from 'react-router-dom';
import style from './style.module.css';
import convertToCurrency from '../../convertToCurrency';

const Transactions = () => {
  const { transactions, showFutureUpdates, dispatchFutureUpdates } =
    useContext(WalletContext);

  const onClickHandler = (event) => {
    event.preventDefault();
    dispatchFutureUpdates(false);

    if (!showFutureUpdates) {
      dispatchFutureUpdates(true);
    }
  };

  const getTransactionPurpose = (reference) => {
    switch (true) {
      case reference.includes('Cash in'):
        return reference.slice(0, 7);
      case reference.includes('Fund Transfer'):
        return reference.slice(0, 13);
      case reference.includes('Payment'):
        return reference.slice(0, 7);
      case reference.includes('Others'):
        return reference.slice(0, 6);
      default:
        break;
    }
  };

  const getTransactionHighlight = (reference) => {
    switch (true) {
      case reference.includes('Cash in'):
        return reference.slice(8, reference.length - 0);
      case reference.includes('Fund Transfer'):
        return reference.slice(14, reference.length - 0);
      case reference.includes('Payment'):
        return reference.slice(8, reference.length - 0);
      case reference.includes('Others'):
        return reference.slice(7, reference.length - 0);
      default:
        break;
    }
  };

  // Change color if credited
  const changeCreditedColor = (amount) => {
    if (amount.slice(-8) > 0) {
      return { color: 'var(--primary-color)' };
    }
  };

  return (
    <div className={style.container}>
      <div className={style.transactionsHeaderContainer}>
        <p className={style.transactionHeader}>Transactions</p>
        <div className={style.seeAll} onClick={onClickHandler}>
          <Link>See all</Link>
        </div>
      </div>
      <ul className={style.transactionsList}>
        {transactions.length === 0 ? (
          <p className={style.noTransactions}>No transactions</p>
        ) : (
          Array.from(transactions)
            .reverse()
            .map(({ id, amount, reference, created }) => (
              <li key={id} className={style.transactionsItem}>
                <div className={style.transactionsItemLeft}>
                  <span className={style.transactionLowOpacity}>
                    {getTransactionPurpose(reference)}
                  </span>
                  <span className={style.transactionHightlight}>
                    {getTransactionHighlight(reference)}
                  </span>
                </div>
                <div className={style.transactionsItemRight}>
                  <span className={style.transactionLowOpacity}>
                    {created.slice(0, 10)}
                  </span>
                  <span
                    style={changeCreditedColor(amount)}
                    className={style.transactionHightlight}
                  >
                    {convertToCurrency(amount.slice(-8))}
                  </span>
                </div>
              </li>
            ))
        )}
      </ul>
    </div>
  );
};

export default Transactions;
