import {User} from "@entities/User";

export interface UserRepository {
  getUser: (id: string) => Promise<User>;
}