import { login, logout } from '../../actions/auth'
import uuid from 'uuid'

test("should set state on login", () => {
  const uid = uuid(); 
  const action = login(uid)
  expect(action).toEqual({
    type: "LOGIN",
    uid
  })
})

test("should set state on logout", () => {
  const action = logout()
  expect(action).toEqual({
    type: "LOGOUT",
  })
})