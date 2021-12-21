import serverlessExpress from "@vendia/serverless-express";
import app from "./app";

const env = process.env.NODE_ENV;
if (env === 'local') {
  app.listen(8080);
}

export const handler = serverlessExpress({ app });
