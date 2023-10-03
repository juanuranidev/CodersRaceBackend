import express from "express";
import routes from "./routes/index.js";
import corsMiddleware from "./middlewares/cors.middleware.js";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());

app.use("/api", routes);

export default app;
