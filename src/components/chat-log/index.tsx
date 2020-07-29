import * as React from 'react'
import { Segment, Comment } from 'semantic-ui-react'
import { Message } from 'services/message-service'
import styles from './chat-log.module.css'

interface Props {
  messages: Message[]
}

function ChatLog({ messages }: Props) {
  return (
    <div className={styles.chatLogContainer}>
      <Segment className={styles.segment}>
        <Comment.Group>
          {messages.map((message) => (
            <Comment key={message.time}>
              <Comment.Avatar src={message.sender.avatar} />
              <Comment.Content>
                <Comment.Author as='a'>{message.sender.name}</Comment.Author>
                <Comment.Metadata>{message.time}</Comment.Metadata>
                <Comment.Text className={styles.commentText}>
                  {message.text}
                </Comment.Text>
              </Comment.Content>
            </Comment>
          ))}
        </Comment.Group>
      </Segment>
    </div>
  )
}

export default ChatLog
