import { Icon } from '@ricons/utils';
import { WindowWrench32Regular } from '@ricons/fluent';
import { WalletContext } from '../../WalletContext';
import { useContext } from 'react';
import style from './style.module.css';

const FutureUpdates = () => {
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
      <header className={style.headerContainer}>
        <div className={style.gearIcon}>
          <Icon>
            <WindowWrench32Regular />
          </Icon>
        </div>
        <p className={style.title}>
          This feature is not <br></br>yet available.
        </p>
        <p className={style.subTitle}>Stay tune for future updates</p>
      </header>
      <div className={style.ctaContainer}>
        <button className={style.close} onClick={onClickHandler}>
          Close
        </button>
      </div>
    </div>
  );
};

export default FutureUpdates;
