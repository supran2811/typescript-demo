import "reflect-metadata";
import { Request, Response, NextFunction, RequestHandler } from "express";
import { MethodMetaDataKeys, METHOD } from "./constants";
import { AppRouter } from "../../AppRouter";

function bodyValidator(keys: string[]): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction): void {
    if (!req.body) {
      res.status(422).send("Invalid Request!!");
      return;
    }

    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send("Missing property " + key);
        return;
      }
    }

    next();
  };
}

export function controller(routePath: string): Function {
  return function (target: Function) {
    for (let key in target.prototype) {
      const method: METHOD = Reflect.getMetadata(
        MethodMetaDataKeys.METHOD,
        target.prototype,
        key
      );
      const path = Reflect.getMetadata(
        MethodMetaDataKeys.PATH,
        target.prototype,
        key
      );

      const middlewares =
        Reflect.getMetadata(
          MethodMetaDataKeys.MIDDLEWARE,
          target.prototype,
          key
        ) || [];

      const validators =
        Reflect.getMetadata(
          MethodMetaDataKeys.VALIDATOR,
          target.prototype,
          key
        ) || [];

      const router = AppRouter.getInstance();
      if (path)
        router[method](
          routePath + path,
          ...middlewares,
          bodyValidator(validators),
          target.prototype[key]
        );
    }
  };
}
