import { startTransition, useContext, useRef, useState } from 'react';
import { WalletContext } from '../../WalletContext';
import { Icon } from '@ricons/utils';
import { Eye24Filled } from '@ricons/fluent';
import { EyeOff24Filled } from '@ricons/fluent';
import Features from '../Features';
import style from './style.module.css';
import convertToCurrency from '../../convertToCurrency';

const MainFeatures = () => {
  const { balance, username } = useContext(WalletContext);
  const [display, setDisplay] = useState(true);
  const refBalance = useRef(null);

  // Convert balance to PH Currency
  const newBalanceFormat = convertToCurrency(balance);

  // Hide/Show balance
  const onClickHandler = () => {
    if (display === true) {
      const str = '*';
      refBalance.current.textContent = str.repeat(
        refBalance.current.textContent.length
      );
      setDisplay(false);
      return;
    }

    refBalance.current.textContent = newBalanceFormat;
    setDisplay(true);
  };

  return (
    <>
      <p className={style.username}>{`Hello, ${username}!`}</p>
      <div className={style.subContainer}>
        <div className={style.balanceContainer}>
          <div className={style.balanceSubContainer}>
            <p ref={refBalance} className={style.balance}>
              {newBalanceFormat}
            </p>
            <p className={style.walletBalanceText}>Wallet balance</p>
          </div>
          <button onClick={onClickHandler} className={style.displayButton}>
            {/* Change display icon */}
            {display === true ? (
              <Icon>
                <Eye24Filled />
              </Icon>
            ) : (
              <Icon>
                <EyeOff24Filled />
              </Icon>
            )}
          </button>
        </div>
        <Features />
      </div>
    </>
  );
};

export default MainFeatures;
