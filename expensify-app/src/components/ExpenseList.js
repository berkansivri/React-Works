import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map(ex => <ExpenseListItem key={ex.id} {...ex} dispatch={props.dispatch}/>)}
  </div>
)

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
} 

export default connect(mapStateToProps)(ExpenseList)
