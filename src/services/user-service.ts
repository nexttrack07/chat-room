export interface User {
  name: string
  avatar?: string
  // id
}

const mockUsers: User[] = [
  {
    name: 'Travis',
    avatar: 'https://react.semantic-ui.com/images/avatar/small/joe.jpg',
  },
  {
    name: 'Nathan',
    avatar: 'https://react.semantic-ui.com/images/avatar/small/matt.jpg',
  },
  {
    name: 'Andros',
    avatar: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
  },
]

class UserService {
  private static instance: UserService
  private users: User[] = mockUsers

  private constructor() {}

  public static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService()
    }

    return UserService.instance
  }

  public getUserList(): User[] {
    return this.users
  }
}

export default UserService
