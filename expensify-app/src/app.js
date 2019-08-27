import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()

store.dispatch(addExpense({ description:"Water Bill" }))
console.log(store.getState())

store.dispatch(addExpense({ description:"Gas Bill" }))
console.log(store.getState())

store.dispatch(setTextFilter("bill"))
let state = store.getState()
console.log(getVisibleExpenses(state.expenses, state.filters));

store.dispatch(setTextFilter("water"))
state = store.getState()
console.log(getVisibleExpenses(state.expenses, state.filters));

ReactDOM.render(<AppRouter />, document.getElementById('app'))