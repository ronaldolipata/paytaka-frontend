import m3o from 'm3o';
import { useState, useRef, useContext, useCallback } from 'react';
import { WalletContext } from '../../WalletContext';
import { Link } from 'react-router-dom';
import debounce from 'lodash.debounce';
import style from './style.module.css';
import convertToCurrency from '../../convertToCurrency';
import TransferSuccessful from '../TransferSuccessful';

const Transfer = () => {
  const client = m3o(import.meta.env.VITE_API_KEY);
  const walletClient = client.wallet;

  const {
    balance,
    userID,
    appendUpdatedBalance,
    appendAmount,
    appendTransferToUsername,
    walletsList,
  } = useContext(WalletContext);

  const [transactionSuccessful, setTransactionSuccessful] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [amount, setAmount] = useState(0);
  const [transferID, setTransferID] = useState(null);

  const refUsername = useRef(null);
  const refAmount = useRef(null);
  const refSelect = useRef(null);
  const refTransferToUsernameError = useRef(null);

  const onClickHandler = (event) => {
    event.preventDefault();
    if (transferID === 'default') {
      refTransferToUsernameError.current.textContent =
        'Username not found. Please enter the correct username to transfer.';
      refAmount.current.value = '';
      return;
    }

    transfer();
  };

  const transfer = async () => {
    setTransactionSuccessful(false);
    const reference = `${refSelect.current.value} ${refUsername.current.value}`;

    try {
      await walletClient.transfer({
        amount: amount,
        from_id: userID,
        reference: reference,
        to_id: transferID,
        visible: true,
      });
    } catch (error) {
      return error;
    }

    try {
      const balanceResponse = await walletClient.balance({
        id: userID,
      });
      appendUpdatedBalance(balanceResponse);
    } catch (error) {
      return error;
    }

    appendAmount(amount);
    appendTransferToUsername(refUsername.current.value);
    setTransactionSuccessful(true);
    refUsername.current.value = null;
    refAmount.current.value = null;
    refTransferToUsernameError.current.textContent = null;
  };

  // Get the ID of the User to use in the transfer function
  const getID = () => {
    Array.from(walletsList).some(({ name, id }) => {
      setTransferID(id);
      return name === refUsername.current.value;
    });
  };

  const debounceHandler = useCallback(debounce(getID, 100), []);

  const onChangeInputHandler = (event) => {
    setAmount(event.target.value);

    if (userID === null) {
      setButtonDisabled(true);
      return;
    }

    refTransferToUsernameError.current.textContent = null;

    debounceHandler();

    if (refUsername.current.value === '' || refAmount.current.value === '') {
      setButtonDisabled(true);
      return;
    }

    setButtonDisabled(false);
  };

  const buttonDisplay = () => {
    if (buttonDisabled) {
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
          Transfer funds <span className={style.headerWithColor}>easily</span>
        </h1>
      </header>
      <div className={style.formInputs}>
        <label className={style.labelUsername}>
          Transfer to (Username)
          <input
            ref={refUsername}
            type="text"
            onChange={onChangeInputHandler}
            placeholder="Enter the username"
          />
        </label>
        <p ref={refTransferToUsernameError} className={style.error}></p>
        <label className={style.labelAmount}>
          Amount
          <input
            ref={refAmount}
            type="number"
            onChange={onChangeInputHandler}
            placeholder="Enter the amount"
          />
        </label>
        <p className={style.balance}>Balance: {convertToCurrency(balance)}</p>
        <label className={style.labelAmount}>
          Purpose
          <select ref={refSelect} className={style.select} name="" id="">
            <option className={style.option} value="Fund Transfer">
              Fund Transfer
            </option>
            <option className={style.option} value="Payment">
              Payment
            </option>
            <option className={style.option} value="Others">
              Others
            </option>
          </select>
        </label>
      </div>
      <div className={style.ctaContainer}>
        <Link to={'/home'}>Go back</Link>
        <button
          className={style.transfer}
          disabled={buttonDisabled}
          style={buttonDisplay()}
          onClick={onClickHandler}
        >
          Continue to transfer
        </button>
        {transactionSuccessful && <TransferSuccessful />}
      </div>
    </form>
  );
};

export default Transfer;
