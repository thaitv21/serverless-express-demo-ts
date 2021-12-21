import {GetUserUseCase} from "./interfaces/GetUserUseCase";
import GetUserUseCaseImpl from "./GetUserUseCaseImpl";

interface UseCases {
  getUserUseCase: GetUserUseCase,
}

const useCases: UseCases = {
  getUserUseCase: new GetUserUseCaseImpl(),
}

export const {
  getUserUseCase,
} = useCases;
