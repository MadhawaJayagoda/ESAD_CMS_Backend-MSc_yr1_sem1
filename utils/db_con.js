const db_config = require("../config/db_config");

class DBConnection {
  constructor() {
    this.databaseConnection = db_config;
  }

  static getInstance() {
    if (!this.databaseConnection) {
      this.databaseConnection = new DBConnection();
    }

    return this.databaseConnection;
  }
}

module.exports = DBConnection;
