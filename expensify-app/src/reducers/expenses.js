// Expenses Reducer

const expensesDefaultState = []

export default (state = expensesDefaultState, action) => {
  switch (action.type) {
    case "SET_EXPENSES":
      return action.expenses
    case "ADD_EXPENSE":
      return [...state, action.expense]
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id)
    case "EDIT_EXPENSE":
      return state.map(expense => { 
        if(expense.id === action.id)
          return { ...expense, ...action.updateExpense } 
        else
          return expense
      })
    default:
      return state
  }
}
