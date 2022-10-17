import * as express from "express";
import catsRouter from "./cats/cats.route";

const app: express.Express = express();

const data = [1, 2, 3, 4];

//* logging middleware
app.use((req, res, next) => {
  console.log(req.rawHeaders[0]);
  console.log("this is logging middleware");
  next();
});

//* json middleware
app.use(express.json());

app.use(catsRouter);

//* READ 고양이 전체 데이터 다 조회
//* READ 특정 고양이 데이터 조회

app.listen(8000, () => {
  console.log("server is on...");
});
