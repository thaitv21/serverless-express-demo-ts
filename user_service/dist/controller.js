"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const _useCases_1 = require("./domains/useCases");
class Controller {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json({ message: 'Get users' });
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield _useCases_1.getUserUseCase.getUser(req.params.id);
            res.json(user);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json({ message: 'Create user' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json({ message: 'Update user' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json({ message: 'Delete user' });
        });
    }
}
const controller = new Controller();
exports.default = controller;
