import env from "./env.js";
import { connect } from "mongoose";

const mongoConnect = async () => {
  try {
    await connect(env.db.mongo);
    console.log("Conectado exitosamente a MongoDB");
  } catch (error) {
    console.log(error);
    console.error("Error al conectar MongoDB");
  }
};

export default mongoConnect;
