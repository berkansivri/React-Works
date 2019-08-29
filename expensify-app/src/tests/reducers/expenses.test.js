import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" })
  expect(state).toEqual([])
})

test("should remove expense by id", () => {
  const action = { id: expenses[1].id, type: "REMOVE_EXPENSE" }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([ expenses[0], expenses[2] ])
})

test("should not remove expense without id", () => {
  const action = { id: '-1', type: "REMOVE_EXPENSE" }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test("should add expense", () => {
  const expense = { id: '101', description: 'Something', note: '', amount: 195, createdAt: moment().valueOf() }
  const action = { expense, type: "ADD_EXPENSE" }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([ ...expenses, expense ])
})

test("should edit an expense", () => {
  const updateExpense = { description: 'Something', note: '', amount: 500, createdAt: moment().valueOf() }
  const action = { id: expenses[2].id, updateExpense, type: "EDIT_EXPENSE" }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([ expenses[0], expenses[1], { ...expenses[2], ...updateExpense } ])
})

test("should not edit expense without id", () => {
  const updateExpense = { description: 'Something', note: '', amount: 500, createdAt: moment().valueOf() }
  const action = { id: "-1", updateExpense, type: "EDIT_EXPENSE" }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})