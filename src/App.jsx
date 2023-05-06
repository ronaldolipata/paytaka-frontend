import { Routes, Route } from 'react-router-dom';
import WalletContextComponent from '@/WalletContext';
import PageNotFound from '@/pages/PageNotFound';
import Intro from '@/pages/Intro';
import Login from '@/pages/Login';
import SignUp from '@/pages/SignUp';
import Home from '@/pages/Home';
import CashIn from '@/pages/CashIn';
import Transfer from '@/pages/Transfer';
import SignUpConfirmation from '@/components/SignUpConfirmation';
import ForgotPassword from '@/components/ForgotPassword';
import CashInSuccessful from '@/components/CashInSuccessful';
import '@/App.css';

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
