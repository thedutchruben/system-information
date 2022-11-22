import sqlite3 from "sqlite3";

export default class SqlLite {
  constructor() {
    this.db = new sqlite3.Database("database.sqlite");
    // toto create tables
    
  }
}
