import {User} from "../../entities/User";

export interface GetUserUseCase {
  getUser: (id: string) => Promise<User>;
}