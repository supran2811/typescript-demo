import { Request, Response, NextFunction } from "express";
import { get, controller, use } from "./decorators";

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  } else {
    res.status(403);
    res.send("Access Denied!!");
  }
}

@controller("")
export class RootController {
  @get("/")
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`
        <div>
         <div>You are loggedin</div>
         <a href="/auth/logout">Logout</a>
        </div>
      `);
    } else {
      res.send(`
        <div>
         <div>You are not loggedin</div>
         <a href="/auth/login">Login</a>
        </div>
      `);
    }
  }

  @get("/protected")
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send("You are now in protected route");
  }
}
