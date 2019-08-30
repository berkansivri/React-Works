import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let editExpense, removeExpense, history, wrapper

beforeEach(() => {
  editExpense = jest.fn()
  removeExpense = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(
    <EditExpensePage 
      expense={expenses[0]} 
      editExpense={editExpense} 
      removeExpense={removeExpense} 
      history={history} 
    />
  )
})

test("should render EditExpensePage correctly", () => {
  expect(wrapper).toMatchSnapshot()
})

test("should handle edit expense", () => {
  const description = "Something"
  wrapper.find("ExpenseForm").prop("onSubmit")({ ...expenses[0], description })

  expect(history.push).toHaveBeenLastCalledWith("/")
  expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, {
    ...expenses[0],
    description
  })
})

test("should handle remove expense", () => {
  wrapper.find("button").simulate("click")
  expect(history.push).toHaveBeenLastCalledWith("/")
  expect(removeExpense).toHaveBeenLastCalledWith(expenses[0].id)
})