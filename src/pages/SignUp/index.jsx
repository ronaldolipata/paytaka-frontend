import m3o from 'm3o';
import { WalletContext } from '../../WalletContext';
import { Link } from 'react-router-dom';
import { useContext, useRef, useState } from 'react';
import style from './style.module.css';

const SignUp = () => {
  // API Call
  const client = m3o(import.meta.env.VITE_API_KEY);
  const walletClient = client.wallet;

  const { walletsList } = useContext(WalletContext);

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const refUsername = useRef(null);
  const refPassword = useRef(null);
  const refNumber = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const signup = async (username, number) => {
    try {
      await walletClient.create({
        name: username,
        description: number,
      });
    } catch (error) {
      return error;
    }
  };

  const validation = () => {
    // Get all names from the array and return true if exist
    const isUsernameExists = Array.from(walletsList).some(
      (e) => e.name === refUsername.current.value
    );

    // Pass sername and number to signup if available
    if (!isUsernameExists) {
      signup(refUsername.current.value, refNumber.current.value);
    }
  };

  const onChangeHandler = () => {
    if (
      refUsername.current.value === '' ||
      refPassword.current.value === '' ||
      refNumber.current.value === ''
    ) {
      setButtonDisabled(true);
      return;
    }
    setButtonDisabled(false);
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

  return (
    <form className={style.form}>
      <header>
        <h1 className={style.header}>
          Start an <span className={style.headerWithColor}>account</span>
        </h1>
      </header>
      <div className={style.formInputs}>
        <label className={style.labelUsername}>
          Username
          <input
            ref={refUsername}
            onChange={onChangeHandler}
            placeholder="Enter your username"
            type="text"
          />
        </label>
        <label className={style.labelPassword}>
          Password
          <input
            ref={refPassword}
            onChange={onChangeHandler}
            placeholder="Enter your password"
            type="password"
          />
        </label>
        <label className={style.labelNumber}>
          Mobile Number
          <input
            ref={refNumber}
            onChange={onChangeHandler}
            placeholder="Enter your mobile number"
            type="number"
          />
        </label>
      </div>
      <div className={style.ctaContainer}>
        <Link to={`/signupconfirmation`}>
          <button
            disabled={buttonDisabled}
            style={buttonDisplay()}
            onClick={validation}
            className={style.signUp}
            onSubmit={onSubmit}
          >
            Sign up
          </button>
        </Link>
        <Link to={`/login`}>Login to your existing account</Link>
      </div>
    </form>
  );
};

export default SignUp;
