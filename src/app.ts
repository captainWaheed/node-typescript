import express, { Application, Request, Response, NextFunction } from "express";

const app: express.Application = express();

const add = () => {
  (a: number, b: number): number => a + b;
};

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello");
});

app.listen(5000, () => {
  console.log("server running!");
});
