import express from "express";
import nasaApiRouter from "./api/v1/nasaApiRouter.js";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
const rootRouter = new express.Router();

rootRouter.use("/", clientRouter);

rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);
rootRouter.use("/api/v1/dailyImage", nasaApiRouter);
// rootRouter.use("/api/v1/daily/dailySpaceImage", nasaApiRouter)

rootRouter.get("/", (req, res) => {
  res.redirect("/dailyImage")
});

export default rootRouter;
