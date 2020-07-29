import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit'
import MessageService, {
  Message,
  MessagePayload,
} from 'services/message-service'

const initialState: Message[] = []

const messages = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    getMessagesSuccess(state, action: PayloadAction<Message[]>) {
      state = action.payload
      return state
    },
    getMessageSuccess(state, action: PayloadAction<Message>) {
      state.push(action.payload)
      return state
    },
  },
})

export const { getMessagesSuccess, getMessageSuccess } = messages.actions
export default messages.reducer

export const fetchMessages = () => (dispatch: Dispatch) => {
  const msgSvc = MessageService.getInstance()
  const messages = msgSvc.getMessages()

  dispatch(getMessagesSuccess(messages))
}

export const addMessage = (data: MessagePayload) => (dispatch: Dispatch) => {
  const msgSvc = MessageService.getInstance()
  const message = msgSvc.addMessage(data)

  dispatch(getMessageSuccess(message))
}
