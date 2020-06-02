import "reflect-metadata";
import { RequestHandler } from "express";

import { MethodMetaDataKeys, METHOD } from "./constants";

interface RoutePropertyDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: RoutePropertyDescriptor) {
      Reflect.defineMetadata(MethodMetaDataKeys.METHOD, method, target, key);
      Reflect.defineMetadata(MethodMetaDataKeys.PATH, path, target, key);
    };
  };
}

export const get = routeBinder(METHOD.GET);
export const post = routeBinder(METHOD.POST);
export const put = routeBinder(METHOD.PUT);
export const del = routeBinder(METHOD.DELETE);
