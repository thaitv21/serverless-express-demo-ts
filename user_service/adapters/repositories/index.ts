import {UserRepository} from "./interfaces/UserRepository";
import UserRepositoryImpl from "./UserRepositoryImpl";

interface Repositories {
  userRepository: UserRepository,
}

const repositories : Repositories = {
  userRepository : new UserRepositoryImpl()
}

export const {
  userRepository,
} = repositories;