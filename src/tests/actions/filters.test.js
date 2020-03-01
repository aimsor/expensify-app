import moment from 'moment';
import {
  setTextFilter,
  sortByAmount,
  setStartDate,
  setEndDate,
  sortByDate
} from '../../actions/filters';

test('should setup set text filter action object with provided value', () => {
  const action = setTextFilter('e');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'e'
  });
});

test('should setup set text filter action object with default value', () => {
  const action = setTextFilter('');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should setup sort by amount filter action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('should setup sort by date filter action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should setup set start date filter action object', () => {
  const action = setStartDate(moment(1000));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(1000)
  });
});

test('should setup set end date filter action object', () => {
  const action = setEndDate(moment(-1000));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(-1000)
  });
});