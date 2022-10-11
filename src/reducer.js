const reducer = (previousState, action) => {
  switch (action.type) {
    case 'wallets_list':
      return {
        ...previousState,
        walletsList: action.payload,
      };
    case 'user_balance':
      return {
        ...previousState,
        balance: action.payload,
      };
    case 'user_transactions':
      return {
        ...previousState,
        transactions: action.payload,
      };
    case 'username':
      return {
        ...previousState,
        username: action.payload,
      };
    case 'user_id':
      return {
        ...previousState,
        userID: action.payload,
      };
    case 'updated_balance':
      return {
        ...previousState,
        updatedBalance: action.payload,
      };
    case 'amount':
      return {
        ...previousState,
        amount: action.payload,
      };
    case 'transfer_to_username':
      return {
        ...previousState,
        transferToUsername: action.payload,
      };
    case 'future_updates':
      return {
        ...previousState,
        showFutureUpdates: action.payload,
      };
    case 'logout':
      return {
        ...previousState,
        logout: action.payload,
      };
    default:
      break;
  }
};

export default reducer;
