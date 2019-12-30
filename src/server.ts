import http from "http";
import express from "express";
import { applyMiddleWare, applyRoutes } from "./utils";
import routes from "./services";
import middleware from "./middleware";

const router = express();
applyMiddleWare(middleware, router);
applyRoutes(routes, router);

const { PORT = 3000 } = process.env;
const server = http.createServer(router);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
