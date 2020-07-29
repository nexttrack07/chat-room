import { User } from 'services/user-service'

export interface Message {
  sender: User
  time: Date
  text: string
}

export type MessagePayload = Pick<Message, 'sender' | 'text'>

class MessageService {
  private static instance: MessageService
  private messages: Message[]

  private constructor() {
    this.messages = []
  }

  public static getInstance(): MessageService {
    if (!MessageService.instance) {
      MessageService.instance = new MessageService()
    }

    return MessageService.instance
  }

  public getMessages(): Message[] {
    return this.messages
  }

  public addMessage(payload: MessagePayload): Message {
    const message = { ...payload, time: new Date() }
    this.messages = [...this.messages, message]

    return message
  }
}

export default MessageService
