import { Router, Request, Response, NextFunction } from "express";
import { handleCompression } from "../middleware/common";
type Wrapper = (router: Router) => void;

export const applyMiddleWare = (middleware: Wrapper[], router: Router) => {
  for (const m of middleware) {
    m(router);
  }
};

type Handler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void> | void;

type Route = {
  path: string;
  method: string;
  handler: Handler | Handler[];
};

export const applyRoutes = (routes: Route[], router: Router) => {
  for (const route of routes) {
    const { method, path, handler } = route;
    (router as any)[method](path, handler);
  }
};
