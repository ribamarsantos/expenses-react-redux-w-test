


export default(expenses = [] ) => Array.isArray(expenses) ? 
expenses.reduce( ( sum, elem ) => sum + elem.amount, 0 ) : expenses.amount;

// export default (expenses) => { 
//     return expenses
//         .map(expense => (expense.amount))
//         .reduce((sum, value) => sum + value,0);
// }