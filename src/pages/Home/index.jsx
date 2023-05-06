import MenuAndNotification from '../../components/MenuAndNotification';
import Navigation from '../../components/Navigation';
import Transactions from '../../components/Transactions';
import MainFeatures from '../../components/MainFeatures';
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
