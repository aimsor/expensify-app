import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';

test('should render ExpenseListItem with a single expense', () => {
  const wrapper = shallow(<ExpenseListItem expense={expenses[1]}/>);
  expect(toJSON(wrapper)).toMatchSnapshot();
});