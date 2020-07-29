import * as React from 'react'
import ChatLog from 'components/chat-log'
import MessageBox from 'components/message-box'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store'
import { fetchMessages } from 'components/chat-log/chat-log.slice'

function App() {
  const messages = useSelector((state: RootState) => state.messages)
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(fetchMessages())
  }, [dispatch])

  return (
    <>
      <ChatLog messages={messages} />
      <MessageBox />
    </>
  )
}

export default App
