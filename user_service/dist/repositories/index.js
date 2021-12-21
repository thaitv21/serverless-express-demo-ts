"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
const UserRepositoryImpl_1 = __importDefault(require("./UserRepositoryImpl"));
const repositories = {
    userRepository: new UserRepositoryImpl_1.default()
};
exports.userRepository = repositories.userRepository;
