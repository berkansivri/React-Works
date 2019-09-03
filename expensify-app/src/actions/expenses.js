import uuid from 'uuid'
import database from '../firebase/firebase'

// Expenses Actions
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense
})

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const { description = '', note = '', amount = 0, createdAt = 0 } = expenseData
    const expense = { description, note, amount, createdAt }

    return database.ref("expenses").push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
    })
  }
}

export const removeExpense = ({ id }) => ({
  type: "REMOVE_EXPENSE",
  id
})

export const editExpense = (id, updateExpense) => ({
  type: "EDIT_EXPENSE",
  id,
  updateExpense
})
