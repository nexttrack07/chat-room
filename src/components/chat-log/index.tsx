import * as React from 'react'
import { Message } from 'services/message-service'
import styles from './chat-log.module.css'

interface Props {
  messages: Message[]
}

function ChatLog({ messages }: Props) {
  return (
    <div className={styles.chatLogContainer}>
      <div className={styles.chatLog}>
        {messages.map((message) => (
          <p>{message.text}</p>
        ))}
      </div>
    </div>
  )
}

export default ChatLog
