import React from 'react'
import getExpensesTotal from '../selectors/expenses-total'
import numeral from 'numeral'
import visibleExpenses from '../selectors/expenses'
import { connect } from 'react-redux'

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => (
  <div>
    <h3>Viewing {expenseCount} expenses totalling  { numeral(expensesTotal / 100).format("$0,0.00") }</h3>
  </div>
)

const mapStateToProps = (state) => {
  const expenses = visibleExpenses(state.expenses, state.filters)
  return {
    expenseCount: expenses.length,
    expensesTotal: getExpensesTotal(expenses)
  }
}

export default connect(mapStateToProps)(ExpensesSummary) 