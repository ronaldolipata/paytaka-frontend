import { Routes, Route } from 'react-router-dom';
import Intro from './pages/Intro';
import WalletContextComponent from './WalletContext';
import SignUp from './components/SignUp';
import SignUpConfirmation from './components/SignUpConfirmation';
import ForgotPassword from './components/ForgotPassword';
import Login from './components/Login';
import Home from './components/Home';
import CashIn from './components/CashIn';
import CashInSuccessful from './components/CashInSuccessful';
import Transfer from './components/Transfer';
import PageNotFound from './components/PageNotFound';
import './App.css';

const App = () => {
  return (
    <WalletContextComponent>
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/*' element={<PageNotFound />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signupconfirmation' element={<SignUpConfirmation />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cashin' element={<CashIn />} />
        <Route path='/cashinsuccessful' element={<CashInSuccessful />} />
        <Route path='/transfer' element={<Transfer />} />
      </Routes>
    </WalletContextComponent>
  );
};

export default App;
