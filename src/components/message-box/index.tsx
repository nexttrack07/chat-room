import * as React from 'react'
import {
  Dropdown,
  Label,
  DropdownItemProps,
  Input,
  Button,
} from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { User } from 'services/user-service'
import { fetchUsers } from './user.slice'
import { addMessage } from 'components/chat-log/chat-log.slice'
import { RootState } from 'components/app/store'
import styles from './message-box.module.css'

function MessageBox() {
  const [message, setMessage] = React.useState('')
  const users = useSelector((state: RootState) => state.users)
  const [selectedUser, setSelectedUser] = React.useState<User>({
    name: 'Ben',
    avatar: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
  })
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  function handleSendClick() {
    if (selectedUser) {
      dispatch(addMessage({ sender: selectedUser, text: message }))
    }

    setMessage('')
  }

  function handleMenuChange(
    event: React.SyntheticEvent,
    data: DropdownItemProps
  ) {
    const usr = users.find((user) => user.name === data.text)
    if (usr) {
      setSelectedUser(usr)
    }
  }

  return (
    <div className={styles.messageWrapper}>
      <Label className={styles.messageLabel}>
        <Dropdown closeOnChange text={selectedUser?.name} simple>
          <Dropdown.Menu>
            {users.map((user) => (
              <Dropdown.Item
                key={user.name}
                text={user.name}
                onClick={handleMenuChange}
              />
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Label>
      <div className={styles.messageInputWrapper}>
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={styles.messageInput}
        />
        <Button primary onClick={handleSendClick}>
          SEND
        </Button>
      </div>
    </div>
  )
}

export default MessageBox
