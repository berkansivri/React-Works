import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import { startSetExpenses } from './actions/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import { firebase } from './firebase/firebase'


const store = configureStore()

// store.dispatch(addExpense({ id:"1", description:"Water Bill", amount: 4500 }))
// store.dispatch(addExpense({ id:"2", description:"Gas Bill", createdAt: 1000, amount: 3000 }))
// store.dispatch(addExpense({ id:"3", description:"Rent", amount: 109500 }))

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

let hasRendered = false
const renderApp = () => {
  if(!hasRendered){
    ReactDOM.render(jsx, document.getElementById('app'))
    hasRendered = true
  }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    store.dispatch(startSetExpenses()).then(() => {
      renderApp()
      if(history.location.pathname === '/') {
        history.push("/dashboard")
      }
    })
  }
  else {
    renderApp()
    history.push("/")
  }
})