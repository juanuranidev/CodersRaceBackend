import { CustomError } from "../../domain/errors/custom.error";
import { PrismaDb } from "../db/prisma";
import {
  languages,
  pythonCodes,
  typeScriptCodes,
  javaScriptCodes,
} from "./data";

const db = PrismaDb.execute();
(async () => {
  await createLanguages();
  await createJavaScriptCodes();
  await createTypeScriptCodes();
  await createPythonCodes();
})();

async function createLanguages() {
  try {
    for (const language of languages) {
      const languageExist = await db.language.findFirst({
        where: {
          name: language.name,
        },
      });

      if (!languageExist) {
        await db.language.create({ data: language });
      }
      console.log(language);
    }
  } catch (error) {
    throw CustomError.internalServer(`Error. ${error}`);
  }
  console.log("Languages creados con éxito");
}

async function createJavaScriptCodes() {
  try {
    const language: any = await db.language.findFirst({
      where: {
        name: "javascript",
      },
    });

    for (const javaSriptCode of javaScriptCodes) {
      await db.code.create({
        data: {
          text: javaSriptCode,
          language: { connect: { id: language.id } },
        },
      });
    }

    console.log("Códigos de python creados con éxito");
  } catch (error) {
    throw CustomError.internalServer(`Error. ${error}`);
  }
}

async function createTypeScriptCodes() {
  try {
    const language: any = await db.language.findFirst({
      where: {
        name: "typescript",
      },
    });

    for (const typeScriptCode of typeScriptCodes) {
      await db.code.create({
        data: {
          text: typeScriptCode,
          language: { connect: { id: language.id } },
        },
      });
    }

    console.log("Códigos de typescript creados con éxito");
  } catch (error) {
    throw CustomError.internalServer(`Error. ${error}`);
  }
}

async function createPythonCodes() {
  try {
    const language: any = await db.language.findFirst({
      where: {
        name: "python",
      },
    });

    for (const pythonCode of pythonCodes) {
      await db.code.create({
        data: {
          text: pythonCode,
          language: { connect: { id: language.id } },
        },
      });
    }

    console.log("Códigos de python creados con éxito");
  } catch (error) {
    throw CustomError.internalServer(`Error. ${error}`);
  }
}
