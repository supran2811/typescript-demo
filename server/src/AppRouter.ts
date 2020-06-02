import { Router } from "express";

export class AppRouter {
  private static router = Router();

  static getInstance() {
    return AppRouter.router;
  }
}
