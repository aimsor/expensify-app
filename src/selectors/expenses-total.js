const selectExpensesTotal = (expenses) => {
  return expenses
    .map((expense) => expense.amount)
    .reduce((previousValue, currValue) => previousValue + currValue, 0);
};

export default selectExpensesTotal;