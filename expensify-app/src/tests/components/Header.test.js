import React from 'react'
import { shallow } from 'enzyme'
import { Header } from '../../components/Header'

let wrapper, logout
beforeEach(() => {
  logout = jest.fn()
  wrapper = shallow(<Header logout={logout}/>)
})

test("should render header correctly", () => {
  expect(wrapper).toMatchSnapshot();
})

test("should call logout on button click", () => {
  wrapper.find("button").simulate('click')
  expect(logout).toHaveBeenCalled()
})