import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpensesSummary from './ExpensesSummary'

const Dashboard = () => (
  <div>
    <ExpenseListFilters />
    <ExpensesSummary />
    <ExpenseList />
  </div>
)

export default Dashboard