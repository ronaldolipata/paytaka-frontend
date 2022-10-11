const convertToCurrency = (amount) => {
  return new Intl.NumberFormat('fil-PH', {
    style: 'currency',
    currency: 'PHP',
  }).format(amount);
};

export default convertToCurrency;
