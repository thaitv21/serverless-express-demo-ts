"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const serverless_express_1 = __importDefault(require("@vendia/serverless-express"));
const app_1 = __importDefault(require("./app"));
const env = process.env.NODE_ENV;
if (env === 'local') {
    app_1.default.listen(8080);
}
exports.handler = (0, serverless_express_1.default)({ app: app_1.default });
