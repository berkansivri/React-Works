import uuid from 'uuid'
import database from '../firebase/firebase'

// Expenses Actions
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense
})

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const { description = '', note = '', amount = 0, createdAt = 0 } = expenseData
    const expense = { description, note, amount, createdAt }
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
    })
  }
}

export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
})

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch,getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({ id }))
    })
  }
}

export const startEditExpense = (id, updateExpense) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/expenses/${id}`).update(updateExpense).then(() => {
      dispatch(editExpense(id, updateExpense))
    })
  }
}

export const editExpense = (id, updateExpense) => ({
  type: "EDIT_EXPENSE",
  id,
  updateExpense
})

export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses
})

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/expenses`).once("value").then((snapshot) => {
      const expenses = []
      snapshot.forEach((child) => {
        expenses.push({
          id: child.key,
          ...child.val()
        })
      })
      dispatch(setExpenses(expenses))
    })
  }
}

