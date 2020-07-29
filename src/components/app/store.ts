import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from 'components/message-box/user.slice'
import messagesReducer from 'components/chat-log/chat-log.slice'

const rootReducer = combineReducers({
  users: userReducer,
  messages: messagesReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default configureStore({
  reducer: rootReducer,
})
