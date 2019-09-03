import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let editExpense, startRemoveExpense, history, wrapper

beforeEach(() => {
  editExpense = jest.fn()
  startRemoveExpense = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(
    <EditExpensePage 
      expense={expenses[0]} 
      editExpense={editExpense} 
      startRemoveExpense={startRemoveExpense} 
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

test("should handle start remove expense", () => {
  wrapper.find("button").simulate("click")
  expect(history.push).toHaveBeenLastCalledWith("/")
  expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[0].id)
})