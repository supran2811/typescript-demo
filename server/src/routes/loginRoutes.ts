import { Router, Request, Response, NextFunction } from "express";

const router = Router();

// function requireAuth(req: Request, res: Response, next: NextFunction): void {
//   if (req.session && req.session.loggedIn) {
//     next();
//     return;
//   } else {
//     res.status(403);
//     res.send("Access Denied!!");
//   }
// }

// router.get("/login", (req: Request, res: Response) => {
//   res.send(`
//     <form method="POST">
//       <div>
//         <label>Email:</label>
//         <input name="email" type="email"/>
//       </div>
//       <div>
//         <label>Password:</label>
//         <input name="password" type="password"/>
//       </div>
//       <button>Submit</button>
//     </form>
//   `);
// });

// router.post("/login", (req: Request, res: Response) => {
//   const { email, password } = req.body;
//   if (email === "hi@hi.com" && password === "password") {
//     if (req.session) {
//       req.session.loggedIn = true;
//     }
//     res.redirect("/");
//   } else {
//     res.send("Invalid login credential");
//   }
// });

// router.get("/logout", (req: Request, res: Response) => {
//   if (req.session && req.session.loggedIn) {
//     req.session.loggedIn = false;
//     res.redirect("/login");
//   }
// });

// router.get("/", (req: Request, res: Response) => {
//   if (req.session && req.session.loggedIn) {
//     res.send(`
//       <div>
//        <div>You are loggedin</div>
//        <a href="/logout">Logout</a>
//       </div>
//     `);
//   } else {
//     res.send(`
//       <div>
//        <div>You are not loggedin</div>
//        <a href="/login">Login</a>
//       </div>
//     `);
//   }
// });

// router.get("/protected", requireAuth, (req: Request, res: Response) => {
//   res.send("You are now in protected route");
// });

export { router };
