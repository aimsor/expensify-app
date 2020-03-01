import moment from 'moment';
import expensesReducer from '../../reducers/expenses';

const expenses = [
  {
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
  },
  {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 130000,
    createdAt: moment(0).subtract(4, 'd').valueOf()
  },
  {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'd').valueOf()
  }
];

export default expenses;