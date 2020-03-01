import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let editExpense, history, wrapper, removeExpense;
beforeEach(() => {
  editExpense = jest.fn();
  history = { push: jest.fn() };
  removeExpense = jest.fn();
  wrapper = shallow(
  <EditExpensePage
    editExpense={editExpense}
    history={history}
    expense={expenses[1]}
    removeExpense={removeExpense}
  />);
});

test('should render EditExpense page', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle removeExpense', () => {
  // wrapper.find('button').simulate('click');
  wrapper.find('button').prop('onClick')(expenses[1]);
  expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[1].id });
  expect(history.push).toHaveBeenLastCalledWith('/');
});
