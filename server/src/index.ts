import express from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import { AppRouter } from "./AppRouter";
import "./controllers/LoginController";
import "./controllers/RootController";
import { router as loginRoutes } from "./routes/loginRoutes";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["secret"] }));
app.use(AppRouter.getInstance());
app.use(loginRoutes);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
