import MenuAndNotification from '../MenuAndNotification';
import Navigation from '../Navigation';
import Transactions from '../Transactions';
import MainFeatures from '../MainFeatures';
import style from './style.module.css';

const Home = () => {
  return (
    <div className={style.container}>
      <MenuAndNotification />
      <Navigation />
      <MainFeatures />
      <Transactions />
    </div>
  );
};

export default Home;
