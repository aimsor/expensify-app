import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correct', () => {
  wrapper.setProps({ filters: altFilters });
  expect(wrapper).toMatchSnapshot();
});

// should handle text change
test('should handle text change', () => {
  wrapper.find('input').simulate('change', {
    target: {
      value: altFilters.text
    }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(altFilters.text);
  expect(wrapper).toMatchSnapshot();
});

// should sort by date
test('should sort by date', () => {
  wrapper.setProps({ filters: altFilters });
  wrapper.find('select').simulate('change', {
    target: {
      value: filters.sortBy
    }
  });
  expect(sortByDate).toHaveBeenCalled();
  expect(wrapper).toMatchSnapshot();
});

// should sort by amount
test('should sort by amount', () => {
  wrapper.find('select').simulate('change', {
    target: {
      value: altFilters.sortBy
    }
  });
  expect(sortByAmount).toHaveBeenCalled();
  expect(wrapper).toMatchSnapshot();
});

// should handle date changes
test('should handle date changes', () => {
  wrapper.find('DateRangePicker').prop('onDatesChange')(altFilters);
  expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate);
  expect(wrapper).toMatchSnapshot();
});

// should handle date focus changes
test('should handle date focus changes', () => {
  const calendarFocused = 'startDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
  expect(wrapper).toMatchSnapshot();
});
