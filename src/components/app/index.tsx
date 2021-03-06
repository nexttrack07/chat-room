import * as React from 'react'
import { Container } from 'semantic-ui-react'
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
    <Container className='app-container'>
      <ChatLog messages={messages} />
      <MessageBox />
    </Container>
  )
}

export default App
