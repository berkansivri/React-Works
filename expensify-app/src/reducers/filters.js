import moment from 'moment'
// Filters Reducer

const filtersDefaultState = {
  text: '',
  sortBy: 'date', //date or amount
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
}

export default (state = filtersDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT":
      return {...state, text: action.text}
    case "SORT_BY_AMOUNT":
      return {...state, sortBy: 'amount'}
    case "SORT_BY_DATE":
      return {...state, sortBy: 'date'}
    case "SET_START_DATE":
      return { ...state, startDate: action.date }
    case "SET_END_DATE":
      return { ...state, endDate: action.date }
    default:
      return state
  }
}
