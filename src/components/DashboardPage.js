

import React from 'react';
import { Link } from 'react-router-dom';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';




const DashboardPage = () => (
  
  <div className="content-container">
  <h3>Posts</h3>
  <ExpenseListFilters />
  <ExpenseList />
  
  

  <Link to="/create">
  <button className="button" type="button">
       Add Post
  </button>
  </Link>
  </div>
);

export default DashboardPage;



