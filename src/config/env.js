import { config } from "dotenv";
config();

const { MONGO_URL, PORT_APP } = process.env;

const env = {
  db: {
    mongo: MONGO_URL,
  },
  app: {
    port: PORT_APP,
  },
};

export default env;
