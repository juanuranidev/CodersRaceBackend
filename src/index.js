import app from "./app.js";
import env from "./config/env.js";
import mongoConnect from "./config/mongodb.js";

mongoConnect();

app.listen(env.app.port, () =>
  console.log(`Listo por el puerto ${env.app.port}`)
);
