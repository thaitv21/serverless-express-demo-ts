import {GetUserUseCase} from "./interfaces/GetUserUseCase";
import {userRepository} from '../../adapters/repositories';
export default class GetUserUseCaseImpl implements GetUserUseCase {
  getUser = async (id: string) => {
    return await userRepository.getUser(id);
  }
}