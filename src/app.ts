import * as express from "express";
import { Cat, CatType } from "./app.model";

const app: express.Express = express();

const data = [1, 2, 3, 4];

app.use((req, res, next) => {
  console.log(req.rawHeaders[0]);
  console.log("this is logging middleware");
  next();
});

app.use("/cats/som", (req, res, next) => {
  console.log("this is som middleware");
  next();
});

app.get("/", (req: express.Request, res: express.Response) => {
  res.send({ cats: Cat });
});

app.get("/cats/blue", (req, res) => {
  res.send({ blue: Cat[0] });
});

app.get("/cats/som", (req, res) => {
  res.send({ som: Cat[1] });
});

app.use((req, res, next) => {
  console.log("this is logging middleware");
  res.send({ error: "404 not found error" });
});

app.listen(8000, () => {
  console.log("server is on...");
});
