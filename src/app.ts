import * as express from "express";
import { Cat, CatType } from "./app.model";

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

//* READ 고양이 전체 데이터 다 조회
//* READ 특정 고양이 데이터 조회

app.get("/cats/:id", (req, res) => {
  try {
    const params = req.params;

    const cat = Cat.find((cat) => {
      return cat.id === params.id;
    });
    res.status(200).send({
      success: true,
      data: {
        cat,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* CREATE 새로운 고양이 추가 api
app.post("/cats", (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    Cat.push(data); // create
    res.status(200).send({
      success: true,
      data,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

// * 404 middleware
app.use((req, res, next) => {
  console.log("this is logging middleware");
  res.send({ error: "404 not found error" });
});

app.listen(8000, () => {
  console.log("server is on...");
});
