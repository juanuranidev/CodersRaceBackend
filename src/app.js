import express from "express";
import routes from "./routes/index.js";
import corsMiddleware from "./middlewares/cors.middleware.js";

const app = express();
app.use(corsMiddleware());
app.use(express.json());

app.use("/api", routes);

export default app;
