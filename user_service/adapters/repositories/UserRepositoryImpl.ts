import {UserRepository} from "./interfaces/UserRepository";
import {User} from "@entities/User";

export default class UserRepositoryImpl implements UserRepository {
  getUser = async (id: string) => {
    const user: User = {
      id,
      username: 'User ' + id,
    }
    return user;
  }
}