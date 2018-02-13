
import React from 'react';
import { connect } from 'react-redux';
import BlogForm from './BlogForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
  <div className="content-container">
    <h3>Add title and body</h3>
    <BlogForm
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddExpensePage);



