import { Link } from 'react-router-dom';
import style from './style.module.css';

const ForgotPassword = () => {
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className={style.form}>
      <header>
        <h1 className={style.header}>
          Reset your <span className={style.headerWithColor}>password</span>
        </h1>
      </header>
      <div className={style.formInputs}>
        <label className={style.labelUsername}>
          Username
          <input placeholder="Enter your username" type="text" />
        </label>
        <label className={style.labelNumber}>
          Mobile Number
          <input placeholder="Enter your mobile number" type="text" />
        </label>
        <p className={style.instruction}>
          An OTP will be sent to your mobile number upon request to reset the
          password.
        </p>
      </div>
      <div className={style.ctaContainer}>
        <Link to={`/resetconfirmation`}>
          <button className={style.request} onSubmit={onSubmit}>
            Request OTP
          </button>
        </Link>
        <Link to={`/login`}>Login to your existing account</Link>
      </div>
    </form>
  );
};

export default ForgotPassword;
