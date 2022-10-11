import { Link } from 'react-router-dom';
import { WalletContext } from '../../WalletContext';
import { useContext } from 'react';
import FutureUpdates from '../FutureUpdates';
import { Icon } from '@ricons/utils';
import { CheckmarkStarburst24Filled } from '@ricons/fluent';
import convertToCurrency from '../../convertToCurrency';
import style from './style.module.css';

const TransferSuccessful = () => {
  const {
    amount,
    transferToUsername,
    showFutureUpdates,
    dispatchFutureUpdates,
  } = useContext(WalletContext);

  // Convert balance to PH Currency
  const newBalanceFormat = convertToCurrency(amount);

  const onClickHandler = (event) => {
    event.preventDefault();
    dispatchFutureUpdates(false);

    if (!showFutureUpdates) {
      dispatchFutureUpdates(true);
    }
  };

  return (
    <div className={style.container}>
      <header className={style.headerContainer}>
        <div className={style.checkIcon}>
          <Icon>
            <CheckmarkStarburst24Filled />
          </Icon>
        </div>
        <p className={style.title}>You have transferred</p>
        <p className={style.amount}>{newBalanceFormat}</p>
        <p className={style.subTitle}>to {transferToUsername}</p>
      </header>
      <div className={style.ctaContainer}>
        <Link onClick={onClickHandler} to={`/receipt`}>
          <button className={style.receipt}>View receipt</button>
        </Link>
        {showFutureUpdates && <FutureUpdates />}
        <Link to={`/home`}>
          <button className={style.home}>Finish</button>
        </Link>
      </div>
    </div>
  );
};

export default TransferSuccessful;
