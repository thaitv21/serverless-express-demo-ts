"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserUseCase = void 0;
const GetUserUseCaseImpl_1 = __importDefault(require("./GetUserUseCaseImpl"));
const useCases = {
    getUserUseCase: new GetUserUseCaseImpl_1.default(),
};
exports.getUserUseCase = useCases.getUserUseCase;
