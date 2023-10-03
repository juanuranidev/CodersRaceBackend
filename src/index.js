import app from "./app.js";
import env from "./config/env.js";
import mongoConnect from "./config/mongodb.js";

mongoConnect();

const port = env.app.port ?? 1234;

app.listen(port, () => console.log(`Listo por el puerto ${port}`));
