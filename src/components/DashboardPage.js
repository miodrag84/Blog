

import React from 'react';
import { Link } from 'react-router-dom';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';




const DashboardPage = () => (
  
  <div>

  <ExpenseListFilters />
  <ExpenseList />
  
  

  <Link to="/create">
  <button type="button">
       Add Post
  </button>
  </Link>
  </div>
);

export default DashboardPage;



