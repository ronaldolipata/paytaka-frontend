import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <WalletContextComponent>
              <App />
            </WalletContextComponent>
          }
        ></Route>
        <Route
          path="/*"
          element={
            <WalletContextComponent>
              <PageNotFound />
            </WalletContextComponent>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <WalletContextComponent>
              <SignUp />
            </WalletContextComponent>
          }
        ></Route>
        <Route
          path="/signupconfirmation"
          element={
            <WalletContextComponent>
              <SignUpConfirmation />
            </WalletContextComponent>
          }
        ></Route>
        <Route
          path="/forgotpassword"
          element={
            <WalletContextComponent>
              <ForgotPassword />
            </WalletContextComponent>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <WalletContextComponent>
              <Login />
            </WalletContextComponent>
          }
        ></Route>
        <Route
          path="/home"
          element={
            <WalletContextComponent>
              <Home />
            </WalletContextComponent>
          }
        ></Route>
        <Route
          path="/cashin"
          element={
            <WalletContextComponent>
              <CashIn />
            </WalletContextComponent>
          }
        ></Route>
        <Route
          path="/cashinsuccessful"
          element={
            <WalletContextComponent>
              <CashInSuccessful />
            </WalletContextComponent>
          }
        ></Route>
        <Route
          path="/transfer"
          element={
            <WalletContextComponent>
              <Transfer />
            </WalletContextComponent>
          }
        ></Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
