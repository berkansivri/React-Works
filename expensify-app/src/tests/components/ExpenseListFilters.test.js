import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'
import moment from 'moment'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
  setTextFilter = jest.fn()
  sortByDate = jest.fn()
  sortByAmount = jest.fn()
  setStartDate = jest.fn()
  setEndDate = jest.fn()
  wrapper = shallow(
    <ExpenseListFilters 
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  )
})

test("should render ExpenseListFilters correctly", () => {
  expect(wrapper).toMatchSnapshot()
})

test("should render ExpenseListFilters with alt data correctly", () => {
  wrapper.setProps({ filters: altFilters })
  expect(wrapper).toMatchSnapshot()
})

test("should handle text change", () => {
  let text = "Something"
  wrapper.find("input").simulate("change", { target: { value: text } })
  expect(setTextFilter).toHaveBeenLastCalledWith(text)
})

test("should handle sortByDate", () => {
  wrapper.setProps({
    filters: altFilters
  })
  wrapper.find("select").simulate("change", { target: { value: "date" }})
  expect(sortByDate).toHaveBeenCalled()
})

test("should handle sortByAmount", () => {
  wrapper.find("select").prop("onChange")({ target: { value: "amount" }})
  expect(sortByAmount).toHaveBeenCalled()
})

test("should handle setStartDate", () => {
  wrapper.find("DateRangePicker").prop("onDatesChange")({ startDate: altFilters.startDate, endDate: altFilters.endDate })
  expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate)
  expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate)
})

test("should handle onFocusChange on date picker", () => {
  const calendarFocused = "endDate"
  wrapper.find("DateRangePicker").prop("onFocusChange")(calendarFocused)
  expect(wrapper.state("calendarFocused")).toBe(calendarFocused)
})