
export default(expenses) =>  expenses.reduce( ( prevVal, elem ) => prevVal + elem.amount, 0 )/ 100; 
