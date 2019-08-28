import uuid from 'uuid'

// Expenses Actions
export const addExpense = ( { description = '', note = '', amount = 0, createdAt = 0 } = {} ) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})

export const removeExpense = ({ id }) => ({
  type: "REMOVE_EXPENSE",
  id
})

export const editExpense = (id, updateExpense) => ({
  type: "EDIT_EXPENSE",
  id,
  updateExpense
})
