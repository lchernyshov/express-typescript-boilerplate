import bodyParser from "body-parser";
import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import { logger } from "./common/logger.js";
import { GLOBAL_CONFIG } from "./configs/global.js";

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  logger(`err: ${err}`);
  res.status(500);
  res.json({ success: false, error: err.message || err });
});

app.listen(GLOBAL_CONFIG.PORT, () => {
  console.log(
    `⚡️[server]: Server is running at https://localhost:${GLOBAL_CONFIG.PORT}`
  );
});
