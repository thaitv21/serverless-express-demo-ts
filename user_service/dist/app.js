"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("./controller"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    console.log('url', req.url);
    console.log('querystring', req.query);
    console.log('params', req.params);
    console.log('body', req.body);
    next();
});
app.get("/users", controller_1.default.list);
app.get("/users/:id", controller_1.default.get);
app.post("/users", controller_1.default.create);
app.put("/users/:id", controller_1.default.update);
app.delete("/users/:id", controller_1.default.delete);
exports.default = app;
