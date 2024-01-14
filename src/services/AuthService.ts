import { User } from "../model/Model";

export class AuthService {
  public async login(userName: string, password: string): Promise<User | undefined> {
    if(userName === 'testuser' && password === '123456') {
      return {
        userName,
        email: 'testuser@example.com'
      }
    }
    return undefined;
  }
}
