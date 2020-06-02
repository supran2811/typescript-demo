import "reflect-metadata";
import { MethodMetaDataKeys } from "./constants";

export function bodyValidator(...keys: string[]) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const validators =
      Reflect.getMetadata(MethodMetaDataKeys.VALIDATOR, target, key) || [];
    Reflect.defineMetadata(
      MethodMetaDataKeys.VALIDATOR,
      [...validators, ...keys],
      target,
      key
    );
  };
}
