import { CustomError } from "../../domain/errors";
import { PrismaDb } from "../db/prisma";

//

// languages.forEach(async (language) => {
//     try {
//         const languageCreated = await db.language.create({data: language})

//     } catch (error) {
//         throw CustomError.internalServer(`Error: ${error}`)
//     }
// })

(async () => {
  await main();
  console.log("Datos cargados con éxito");
})();

async function main() {
  const db = PrismaDb.execute();

  const languages = [
    { name: "javascript" },
    { name: "typescript" },
    { name: "python" },
  ];

  console.log(languages);

  try {
    languages.forEach(async (language) => {
      await db.language.create({ data: language });
    });
  } catch (error) {
    throw CustomError.internalServer(`Error. ${error}`);
  }
}
