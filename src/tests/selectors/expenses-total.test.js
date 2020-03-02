import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

// should return 0 if no expenses
test('should return 0 if no expenses', () => {
  const result = selectExpensesTotal([]);
  expect(result).toBe(0);
});


// should correctly add up a single expense
test('should correctly add up a single expense', () => {
  const result = selectExpensesTotal([expenses[1]]);
  expect(result).toBe(expenses[1].amount);
});


// should correctly add up multiple expenses
test('should correctly add up multiple expenses', () => {
  const total = expenses[0].amount + expenses[1].amount + expenses[2].amount;
  const result = selectExpensesTotal(expenses);
  expect(result).toBe(total);
});