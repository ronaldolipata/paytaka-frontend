import { Link } from 'react-router-dom';
import style from './style.module.css';

const Intro = () => {
  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <h1 className={style.title}>Paytaka</h1>
        <p className={style.subTitle}>The virtual wallet for your needs.</p>
      </div>
      <div className={style.ctaContainer}>
        <Link to={`/signup`}>
          <button className={`${style.signUp} ${style.ctaButton}`}>
            Start an account
          </button>
        </Link>
        <Link to={`/login`}>
          <button className={`${style.login} ${style.ctaButton}`}>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Intro;
