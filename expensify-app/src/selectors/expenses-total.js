export default (expenses) =>  expenses.reduce((a,c) => a + c.amount, 0)