import { Link } from 'react-router-dom';
import style from './style.module.css';

const SignUpConfirmation = () => {
  return (
    <div className={style.container}>
      <header className={style.headerContainer}>
        <h1 className={style.header}>Congratulations!</h1>
        <h3 className={style.subHeader}>You are now registared to </h3>
        <p className={style.title}>Paytaka</p>
        <p className={style.subTitle}>The virtual wallet for your needs.</p>
      </header>
      <Link to={`/login`}>
        <button className={style.clickToLogin}>Click here to login</button>
      </Link>
    </div>
  );
};

export default SignUpConfirmation;
