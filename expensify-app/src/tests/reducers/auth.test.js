import authReducer from '../../reducers/auth'
import uuid from 'uuid'

test("should set state on login", () => {
  const uid = uuid()
  const state = authReducer(undefined, {
    type: "LOGIN",
    uid
  })
  expect(state.uid).toBe(uid)
})

test("should set state on logout", () => {
  const state = authReducer({ uid: 'anything' }, {
    type: "LOGOUT"
  })
  expect(state).toEqual({ })
})