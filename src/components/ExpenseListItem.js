import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import expenses from '../reducers/expenses';



const ExpenseListItem = ({ dispatch, id, description }) => (

  <div><h3>
  <Link to={`/edit/${id}`}>
  { description } 
  </Link>
   
  </h3>
  </div>

  
);
export default connect()(ExpenseListItem);