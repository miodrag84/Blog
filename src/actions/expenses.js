import uuid from 'uuid';
//import DashboardPage from '../components/DashboardPage';

export const addExpense = (
  {
    description = '',
    note = ''
    
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note
   
  }
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// ADD_EXPENSE
// export const addExpense = (expense) => ({
//   type: 'ADD_EXPENSE',
//   expense
// });

// export const startAddExpense = (expenseData = {}) => {
//   return (dispatch) => {
//     const {
//       description = '',
//       note = ''
      
//     } = expenseData;
//     const expense = { description, note};

    
    // return database.ref('expenses').push(expense).then((ref) => {
    //   dispatch(addExpense({
    //     id: ref.key,
    //     ...expense
    //   }));
    // });
//   };
// };