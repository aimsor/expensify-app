import moment from 'moment';
import filterReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filterReducer( undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const prevState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  };
  const state = filterReducer(prevState, { type: 'SORT_BY_DATE' });
  expect(state.sortBy).toBe('date');
});

// should set text filter
test('should set text filter according to argument', () => {
  const state = filterReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'test filter' });
  expect(state.text).toBe('test filter');
});

// should set startDate filter
test('should set startDate filter', () => {
  const state = filterReducer(undefined, { type: 'SET_START_DATE', startDate: moment(0) });
  expect(state.startDate).toEqual(moment(0));
});

// should set endDate filter
test('should set endDate filter', () => {
  const state = filterReducer(undefined, { type: 'SET_END_DATE', endDate: moment(0) });
  expect(state.endDate).toEqual(moment(0));
});


