import SqlLite from "./types/sqllite.js";

let database = null;

const setupDatabase = async () => {
  switch (process.env.DATABASE.toLowerCase()) {
    case "sqllite":
      database = new SqlLite();
      database.showTables();
      break;
    case "mysql":
      console.log("mysql");
      break;
    case "mongodb":
      console.log("mongodb");
      break;
    case "elasticsearch":
      console.log("elasticsearch");
      break;
  }
};

export { setupDatabase };
