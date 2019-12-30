import http from "http";
import express from "express";
import { applyMiddleWare, applyRoutes } from "./utils";
import routes from "./services";
import middleware from "./middleware";
import errorHandlers from "./middleware/errorHandlers";

process.on("uncaughtException", e => {
  console.log(e);
  process.exit(1);
});

process.on("unhandledRejection", e => {
  console.log(e);
  process.exit(1);
});

const router = express();
applyMiddleWare(middleware, router);
applyRoutes(routes, router);
applyMiddleWare(errorHandlers, router);

const { PORT = 3000 } = process.env;
const server = http.createServer(router);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
