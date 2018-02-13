import React from 'react';
import { connect } from 'react-redux';
import BlogForm from './BlogForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditBlogPage = (props) => {
  return (
    <div className="content-container">
    <h3>Edit title and body</h3>
      <BlogForm
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
        }}
      />
      <button className="button" onClick={() => {
        props.dispatch(removeExpense({ id: props.expense.id }));
        props.history.push('/');
      }}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditBlogPage);
