import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './user.slice'
import { addMessage } from 'components/chat-log/chat-log.slice'
import { RootState } from 'components/app/store'
import styles from './message-box.module.css'

function MessageBox() {
  const [message, setMessage] = React.useState('')
  const users = useSelector((state: RootState) => state.users)
  const selectedUser = useSelector((state: RootState) => state.users[0])
  const dispatch = useDispatch()
  console.log(users)
  React.useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  function handleSendClick() {
    if (selectedUser) {
      dispatch(addMessage({ sender: selectedUser, text: message }))
    }

    setMessage('')
  }

  return (
    <div className={styles.messageWrapper}>
      <label className={styles.messageLabel}>{selectedUser?.name}</label>
      <div className={styles.messageInputWrapper}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={styles.messageInput}
        />
        <button onClick={handleSendClick}>SEND</button>
      </div>
    </div>
  )
}

export default MessageBox
