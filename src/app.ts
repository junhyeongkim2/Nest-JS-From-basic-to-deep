import * as express from "express";

const app: express.Express = express();
const port: number = 8000;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send({ name: "junhyeong", age: 99, friend: ["hi", "jun"] });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
