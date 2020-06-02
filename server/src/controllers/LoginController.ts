import { Router, Request, Response, NextFunction } from "express";
import { controller, get, post, bodyValidator } from "./decorators";

@controller("/auth")
export class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="POST">
        <div>
          <label>Email:</label>
          <input name="email" type="email"/>
        </div> 
        <div>
          <label>Password:</label>
          <input name="password" type="password"/>
        </div>
        <button>Submit</button>
      </form>
    `);
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;
    if (email === "hi@hi.com" && password === "password") {
      if (req.session) {
        req.session.loggedIn = true;
      }
      res.redirect("/");
    } else {
      res.send("Invalid login credential");
    }
  }

  @get("/logout")
  getLogout(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      req.session.loggedIn = false;
      res.redirect("/auth/login");
    }
  }
}
