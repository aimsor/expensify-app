import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';

test('should render ExpenseSummary with 1 expense', () => {
  const wrapper = shallow(
    <ExpensesSummary
      expenses={[expenses[1]]}
      expensesTotal={selectExpensesTotal([expenses[1]])}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary with multiple expenses', () => {
  const wrapper = shallow(
    <ExpensesSummary 
      expenses={expenses}
      expensesTotal={selectExpensesTotal(expenses)}
    />
  );
  expect(wrapper).toMatchSnapshot();
});