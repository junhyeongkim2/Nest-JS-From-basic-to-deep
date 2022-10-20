import { Request, Response } from "express";
import { Cat, CatType } from "./cats.model";

export const readAllCat = (req: Request, res: Response) => {
  try {
    const cats = Cat;
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

export const readCat = (req: Request, res: Response) => {
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
};

//* CREATE 새로운 고양이 추가 api
export const createCat = (req: Request, res: Response) => {
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
};

export const updateCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = body;
        result = cat;
      }
    });

    res.status(200).send({
      success: true,
      data: {
        cat: result,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

export const updatePartialCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = { ...cat, ...body };
        result = cat;
      }
    });

    res.status(200).send({
      success: true,
      data: {
        cat: result,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

export const deleteCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const newCat = Cat.filter((cat) => cat.id !== params.id);

    res.status(200).send({
      success: true,
      data: {
        cat: newCat,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};
