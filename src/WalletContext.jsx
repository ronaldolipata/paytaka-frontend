import m3o from 'm3o';
import { createContext, useEffect, useReducer } from 'react';
import reducer from './reducer';

export const WalletContext = createContext();

const WalletContextComponent = ({ children }) => {
  // API Call
  const client = m3o(import.meta.env.VITE_API_KEY);
  const walletClient = client.wallet;

  const initialState = {
    walletsList: '',
    balance: 0,
    transactions: '',
    username: '',
    userID: '',
    updatedBalance: 0,
    amount: 0,
    transferToUsername: '',
    showFutureUpdates: false,
    logout: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchWalletsList = (wallets) => {
    dispatch({
      type: 'wallets_list',
      payload: wallets,
    });
  };

  const getWalletsList = async () => {
    try {
      const response = await walletClient.list({});
      dispatchWalletsList(response.accounts);
    } catch (error) {
      return error;
    }
  };

  const dispatchUserBalance = (balance) => {
    dispatch({
      type: 'user_balance',
      payload: balance,
    });
  };

  const getUserBalance = async () => {
    try {
      const response = await walletClient.balance({
        id: state.userID,
      });
      dispatchUserBalance(response.balance);
    } catch (error) {
      return error;
    }
  };

  const dispatchTransactions = (transactions) => {
    dispatch({
      type: 'user_transactions',
      payload: transactions,
    });
  };

  const getTransactions = async () => {
    try {
      const response = await walletClient.transactions({
        id: state.userID,
      });
      dispatchTransactions(response.transactions.slice(-5));
    } catch (error) {
      return error;
    }
  };

  const appendUsername = (username) => {
    dispatch({
      type: 'username',
      payload: username,
    });
  };

  const appendUserID = (id) => {
    dispatch({
      type: 'user_id',
      payload: id,
    });
  };

  const appendUpdatedBalance = (balance) => {
    dispatch({
      type: 'updated_balance',
      payload: balance,
    });
  };

  const appendAmount = (amount) => {
    dispatch({
      type: 'amount',
      payload: amount,
    });
  };

  const appendTransferToUsername = (username) => {
    dispatch({
      type: 'transfer_to_username',
      payload: username,
    });
  };

  const dispatchFutureUpdates = (value) => {
    dispatch({
      type: 'future_updates',
      payload: value,
    });
  };

  const dispatchLogout = (value) => {
    dispatch({
      type: 'logout',
      payload: value,
    });
  };

  useEffect(() => {
    getWalletsList();
    getUserBalance();
    getTransactions();
  }, [state.userID, state.updatedBalance]);

  return (
    <WalletContext.Provider
      value={{
        balance: state.balance,
        transactions: state.transactions,
        walletsList: state.walletsList,
        showFutureUpdates: state.showFutureUpdates,
        logout: state.logout,
        username: state.username,
        userID: state.userID,
        amount: state.amount,
        transferToUsername: state.transferToUsername,
        displayButton: state.displayButton,
        transactionSucessful: state.transactionSucessful,
        dispatchFutureUpdates,
        dispatchLogout,
        appendUsername,
        appendUserID,
        getWalletsList,
        getUserBalance,
        getTransactions,
        appendUpdatedBalance,
        appendAmount,
        appendTransferToUsername,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export default WalletContextComponent;
