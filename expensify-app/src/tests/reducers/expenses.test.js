import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" })
  expect(state).toEqual([])
})

test("should remove expense by id", () => {
  const action = { id: '2', type: "REMOVE_EXPENSE" }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([ expenses[0], expenses[2] ])
})

test("should remove expense by id", () => {
  const action = { id: '-1', type: "REMOVE_EXPENSE" }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([ expenses[0], expenses[2] ])
})

test("should add expense", () => {
  const expense = { id: '4', description: 'Something', note: '', amount: 195, createdAt: moment().valueOf() }
  const action = { expense, type: "ADD_EXPENSE" }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([ ...expenses, expense ])
})

test("should edit expense", () => {
  const updateExpense = { description: 'Something', note: '', amount: 500, createdAt: moment().valueOf() }
  const action = { id:"3", updateExpense, type: "EDIT_EXPENSE" }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([ expenses[0], expenses[1], { ...expenses[2], ...updateExpense } ])
})