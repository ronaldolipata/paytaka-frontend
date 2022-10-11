import m3o from 'm3o';
import { useState, useRef, useContext } from 'react';
import { WalletContext } from '../../WalletContext';
import { Link } from 'react-router-dom';
import style from './style.module.css';
import convertToCurrency from '../../convertToCurrency';
import CashInSuccessful from '../CashInSuccessful';

const CashIn = () => {
  const client = m3o(import.meta.env.VITE_API_KEY);
  const walletClient = client.wallet;

  const { balance, userID, appendUpdatedBalance, appendAmount } =
    useContext(WalletContext);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [amount, setAmount] = useState(0);
  const refAmount = useRef(null);

  const [transactionSuccessful, setTransactionSuccessful] = useState(false);

  const addBalance = async (event) => {
    event.preventDefault();
    setTransactionSuccessful(false);

    try {
      const updatedBalance = await walletClient.credit({
        amount: amount,
        id: userID,
        reference: 'Cash in Paytaka',
        visible: true,
      });
      // To update the balance on the Home
      appendUpdatedBalance(updatedBalance);
      // To display the cashed in amount to CashInSuccessful component
      appendAmount(amount);
      // To show the CashInSuccessful component
      setTransactionSuccessful(true);
      refAmount.current.value = null;
      return;
    } catch (error) {
      return error;
    }
  };

  const onChangeInputHandler = (event) => {
    setAmount(event.target.value);

    if (userID === null) {
      setButtonDisabled(true);
      return;
    }

    if (refAmount.current.value === '') {
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
          Cash in to <span className={style.headerWithColor}>Paytaka</span>
        </h1>
      </header>
      <div className={style.formInputs}>
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
        <p className={style.instruction}>
          From <span className={style.instructionSpan}>₱500.00</span> up to{' '}
          <span className={style.instructionSpan}>₱20,000.00</span> per
          transaction only. Cash in up to 6 times per day.
        </p>
      </div>
      <div className={style.ctaContainer}>
        <Link to={'/home'}>Go back</Link>
        <button
          className={style.addBalance}
          disabled={buttonDisabled}
          style={buttonDisplay()}
          onClick={addBalance}
        >
          Continue to cash in
        </button>
        {transactionSuccessful && <CashInSuccessful />}
      </div>
    </form>
  );
};

export default CashIn;
