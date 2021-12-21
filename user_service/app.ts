import cors from "cors";
import express, {Express} from "express";
import controller from "./controller";

const app : Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  console.log('url', req.url);
  console.log('querystring', req.query);
  console.log('params', req.params);
  console.log('body', req.body);
  next();
})

app.get("/users", controller.list);
app.get("/users/:id", controller.get);
app.post("/users", controller.create)
app.put("/users/:id", controller.update);
app.delete("/users/:id", controller.delete);

export default app;