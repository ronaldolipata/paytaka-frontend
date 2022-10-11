import { Link } from 'react-router-dom';
import { WalletContext } from '../../WalletContext';
import { useContext } from 'react';
import { Icon } from '@ricons/utils';
import { LogoutOutlined } from '@ricons/antd';
import style from './style.module.css';

const Logout = () => {
  const { logout, dispatchLogout } = useContext(WalletContext);

  const onClickNoButton = (event) => {
    event.preventDefault();
    dispatchLogout(false);

    if (!logout) {
      dispatchLogout(true);
    }
  };

  const onClickYesButton = () => {
    dispatchLogout(false);
  };

  return (
    <div className={style.container}>
      <header className={style.headerContainer}>
        <div className={style.logoutIcon}>
          <Icon>
            <LogoutOutlined />
          </Icon>
        </div>
        <p className={style.title}>Are you sure you want to logout?</p>
      </header>
      <div className={style.ctaContainer}>
        <Link to={`/home`}>
          <button onClick={onClickNoButton} className={style.noButton}>
            No
          </button>
        </Link>
        <Link to={`/login`}>
          <button onClick={onClickYesButton} className={style.yesButton}>
            Yes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Logout;
