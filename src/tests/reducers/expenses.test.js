import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state to empty array', () => {
  const state = expensesReducer(undefined, { action: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '2'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('shouldn\'t remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () =>{
  const newExpense = {
    id: '4',
    description: 'Tuition',
    note: '',
    amount: 700000,
    createdAt: moment(0).add(14, 'd').valueOf()
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense: newExpense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, newExpense]);
});

test('should edit expense by id', () => {
  const updates = {
    amount: 150
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    expenses[0],
    { ...expenses[1], amount: updates.amount },
    expenses[2]
  ]);
});

test('shouldn\'t edit expense with invalid id', () => {
  const updates = {
    amount: 150
  };
  const action = {
    id: '-1',
    type: 'EDIT_EXPENSE',
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    ...expenses
  ]);
});