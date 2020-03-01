import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import {
  addExpense,
  removeExpense,
  editExpense
} from './actions/expenses';
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
});

// addExpense -> Water bill
store.dispatch(addExpense({ description: 'Water Bill', amount: 2000 }));
// addExpense -> Rent
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));
// addExpense -> Gas bill
store.dispatch(addExpense({ description: 'Gas Bill', amount: 1500, createdAt: 1000 }));


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


ReactDOM.render((
  jsx
), document.getElementById('app'));