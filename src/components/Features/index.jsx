import style from './style.module.css';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Icon } from '@ricons/utils';
import { SendCopy24Regular } from '@ricons/fluent';
import { Wallet32Regular } from '@ricons/fluent';
import { PhoneArrowRight24Regular } from '@ricons/fluent';
import { BuildingBank20Regular } from '@ricons/fluent';
import { DownloadOutlined } from '@ricons/antd';
import { MdPaper } from '@ricons/ionicons4';
import { Ethereum } from '@ricons/fa';
import { MoreHorizontal32Regular } from '@ricons/fluent';
import FutureUpdates from '../FutureUpdates';
import { WalletContext } from '../../WalletContext';

const Features = () => {
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
      <div>
        <Link to={'/cashin'}>
          <button className={style.featureButton}>
            <Icon>
              <Wallet32Regular />
            </Icon>
          </button>
          <p className={style.featureText}>Cash in</p>
        </Link>
      </div>
      <div>
        <Link to={'/transfer'}>
          <button className={style.featureButton}>
            <Icon>
              <SendCopy24Regular />
            </Icon>
          </button>
        </Link>
        <p className={style.featureText}>Send money</p>
      </div>
      <div>
        <button className={style.featureButton} onClick={onClickHandler}>
          <Icon>
            <DownloadOutlined />
          </Icon>
        </button>
        <p className={style.featureText}>Request money</p>
        {showFutureUpdates && <FutureUpdates />}
      </div>
      <div>
        <button className={style.featureButton} onClick={onClickHandler}>
          <Icon>
            <BuildingBank20Regular />
          </Icon>
        </button>
        <p className={style.featureText}>Bank transfer</p>
      </div>
      <div>
        <button className={style.featureButton} onClick={onClickHandler}>
          <Icon>
            <MdPaper />
          </Icon>
        </button>
        <p className={style.featureText}>Bills</p>
      </div>
      <div>
        <button className={style.featureButton} onClick={onClickHandler}>
          <Icon>
            <PhoneArrowRight24Regular />
          </Icon>
        </button>
        <p className={style.featureText}>Load</p>
      </div>
      <div>
        <button className={style.featureButton} onClick={onClickHandler}>
          <Icon>
            <Ethereum />
          </Icon>
        </button>
        <p className={style.featureText}>Crypto</p>
      </div>
      <div>
        <button className={style.featureButton} onClick={onClickHandler}>
          <Icon>
            <MoreHorizontal32Regular />
          </Icon>
        </button>
        <p className={style.featureText}>More</p>
      </div>
    </div>
  );
};

export default Features;
