import { envs } from "./config";
import { Server } from "./presentation/server";
import { AppRoutes } from "./presentation/routes";
import { PrismaDb } from "./infraestructure/db/prisma";

(async () => {
  main();
})();

function main() {
  const server = new Server({
    port: envs.PORT,
    routes: AppRoutes.routes,
    dbClient: PrismaDb,
  });

  server.start();
}
