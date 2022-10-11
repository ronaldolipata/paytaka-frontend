import { useContext } from 'react';
import { WalletContext } from '../../WalletContext';
import style from './style.module.css';

const Navigation = () => {
  const { showFutureUpdates, dispatchFutureUpdates } =
    useContext(WalletContext);

  const onClickHandler = (event) => {
    event.preventDefault();
    dispatchFutureUpdates(false);

    if (!showFutureUpdates) {
      dispatchFutureUpdates(true);
    }
  };

  return (
    <div className={style.container}>
      <button className={style.wallet}>Wallet</button>
      <button className={style.savings} onClick={onClickHandler}>
        Savings
      </button>
      <button className={style.credit} onClick={onClickHandler}>
        Credit
      </button>
    </div>
  );
};

export default Navigation;
