import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

// Refactor EditExpensePage to be a class based component
// Setup mapDispatchToProps: editExpense and removeExpense
// dev mode
// done now

// should render EditExpensePage
// snapshot

// should handle editExpense
// spies

// should handle removeExpense
// spies

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  onRemove = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button
          onClick={this.onRemove}
        >Remove</button>
      </div> 
    );
  };
};

// const EditExpensePage = (props) => {
//   return (
//     <div>
//       <ExpenseForm
//         expense={props.expense}
//         onSubmit={(expense) => {
//           console.log('updated', expense);
//           props.dispatch(editExpense(props.expense.id, expense));
//           props.history.push('/');
//         }}
//       />
//       <button
//         onClick={() => {
//           props.dispatch(removeExpense({ id: props.expense.id }));
//           props.history.push('/');
//         }}
//       >Remove</button>
//     </div>
//   );
// };

// Remove expense via dispatch and then redirect to dashboard

const mapStateToProps = (state, props) => {
  console.log(props);
  return {
    expense: state.expenses.find((expense) => (
      // props.match.params.id comes from react-dom-router
      expense.id === props.match.params.id
    ))
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    editExpense: (expense, updates) => dispatch(editExpense(expense, updates)),
    removeExpense: (expense) => dispatch(removeExpense(expense))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);