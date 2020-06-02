import "reflect-metadata";
import { RequestHandler } from "express";
import { MethodMetaDataKeys } from "./constants";

export function use(middleware: RequestHandler) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const middlewares =
      Reflect.getMetadata(MethodMetaDataKeys.MIDDLEWARE, target, key) || [];
    Reflect.defineMetadata(
      MethodMetaDataKeys.MIDDLEWARE,
      [...middlewares, middleware],
      target,
      key
    );
  };
}
