import Logout from '../Logout';
import { useContext } from 'react';
import { WalletContext } from '../../WalletContext';
import { Icon } from '@ricons/utils';
import { PersonCircle24Filled } from '@ricons/fluent';
import { LogoutOutlined } from '@ricons/antd';
import { MessageOutlined } from '@ricons/antd';
import style from './style.module.css';

const MenuAndNotification = () => {
  const { showFutureUpdates, dispatchFutureUpdates, logout, dispatchLogout } =
    useContext(WalletContext);

  const onClickHandler = (event) => {
    event.preventDefault();
    dispatchFutureUpdates(false);

    if (!showFutureUpdates) {
      dispatchFutureUpdates(true);
    }
  };

  const onClickLogoutHandler = (event) => {
    event.preventDefault();
    dispatchLogout(false);

    if (!logout) {
      dispatchLogout(true);
    }
  };

  return (
    <div className={style.container}>
      <button className={style.menuButton} onClick={onClickHandler}>
        <Icon>
          <PersonCircle24Filled />
        </Icon>
      </button>
      <div className={style.subContainer}>
        <button className={style.notificationButton} onClick={onClickHandler}>
          <Icon>
            <MessageOutlined />
          </Icon>
        </button>
        {logout && <Logout />}
        <button className={style.logoutButton} onClick={onClickLogoutHandler}>
          <Icon>
            <LogoutOutlined />
          </Icon>
        </button>
      </div>
    </div>
  );
};

export default MenuAndNotification;
