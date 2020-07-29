import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit'
import UserService, { User } from 'services/user-service'

const initialState: User[] = []

const users = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsersSuccess(state, action: PayloadAction<User[]>) {
      state = action.payload
      return state
    },
  },
})

export const { getUsersSuccess } = users.actions
export default users.reducer

export const fetchUsers = () => (dispatch: Dispatch) => {
  const userSvc = UserService.getInstance()
  const users = userSvc.getUserList()

  dispatch(getUsersSuccess(users))
}
