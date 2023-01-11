import { WalletContext } from '../../WalletContext';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef, useContext } from 'react';
import style from './style.module.css';

const Login = () => {
  const { walletsList, appendUsername, appendUserID } =
    useContext(WalletContext);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [linkPath, setLinkPath] = useState(undefined);

  const navigate = useNavigate();

  const refUsername = useRef(null);
  const refPassword = useRef(null);
  const refUsernameError = useRef(null);

  const onSubmit = () => {
    const success = Array.from(walletsList).some(({ name, id }) => {
      appendUserID(id);
      return name === refUsername.current.value;
    });

    if (!success) {
      setLinkPath(undefined);
      refUsernameError.current.textContent =
        'The username you entered is incorrect.';
      return;
    }

    appendUsername(refUsername.current.value);
    navigate('/home');
  };

  const buttonDisplay = () => {
    if (buttonDisabled === true) {
      return {
        backgroundColor: 'var(--gray-color)',
        color: 'var(--dark-color)',
        opacity: 'var(--opacity-3)',
      };
    }
    return {
      backgroundColor: 'var(--primary-color)',
      color: 'var(--light-color)',
    };
  };

  const onChangeHandler = () => {
    refUsernameError.current.textContent = null;

    if (refUsername.current.value === '' || refPassword.current.value === '') {
      setButtonDisabled(true);
      return;
    }

    setButtonDisabled(false);
  };

  return (
    <form onSubmit={onSubmit} className={style.form}>
      <header>
        <h1 className={style.header}>Paytaka</h1>
        <p className={style.subHeader}>The virtual wallet for your needs.</p>
      </header>
      <div className={style.formInputs}>
        <label className={style.labelUsername}>
          Username
          <input
            ref={refUsername}
            onChange={onChangeHandler}
            placeholder='Enter your username'
            type='text'
          />
        </label>
        <p ref={refUsernameError} className={style.error}></p>
        <label className={style.labelPassword}>
          Password
          <input
            ref={refPassword}
            onChange={onChangeHandler}
            placeholder='Enter your password'
            type='password'
          />
        </label>
        <Link to={`/forgotpassword`}>Forgot your password?</Link>
      </div>
      <div className={style.ctaContainer}>
        <button
          disabled={buttonDisabled}
          style={buttonDisplay()}
          className={style.login}
        >
          Login
        </button>
        <Link to={`/signup`}>Start an account here</Link>
      </div>
    </form>
  );
};

export default Login;
