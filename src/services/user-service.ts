export interface User {
  name: string
  // id
}

const mockUsers: User[] = [
  { name: 'Ben' },
  { name: 'Travis' },
  { name: 'Nathan' },
  { name: 'Andros' },
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
