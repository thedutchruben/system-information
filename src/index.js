import * as dotenv from "dotenv";
import { setupDatabase } from "./database/databaseController.js";
import { setupRestApi } from "./rest/restController.js";
dotenv.config();

const init = async () => {
  console.time("System information collector started in ");
  console.log("Setting up database");
  await setupDatabase();
  //TODO setup database
  if (process.env.REST_API) {
    console.log("Starting rest api");
    setupRestApi();
  }
  console.timeEnd("System information collector started in ");
};

init();
