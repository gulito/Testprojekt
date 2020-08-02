// Import Sequelize
import Sequelize from "sequelize";
import InitSchema from "../models/schema_Testprojekt_db";
import UserModel from "../models/Testprojekt_db/UserModel";

// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info(
      "Database connected at: " +
        properties.Testprojekt_db.host +
        ":" +
        properties.Testprojekt_db.port +
        "//" +
        properties.Testprojekt_db.user +
        "@" +
        properties.Testprojekt_db.name
    );

    // Import schema
    InitSchema();

    await UserModel.createAdminUser();

  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");

    const sequelize = new Sequelize(
      properties.Testprojekt_db.name,
      properties.Testprojekt_db.user,
      properties.Testprojekt_db.password,
      {
        host: properties.Testprojekt_db.host,
        dialect: properties.Testprojekt_db.dialect,
        port: properties.Testprojekt_db.port,
        logging: false
      }
    );
    this.dbConnection_Testprojekt_db = sequelize;

    try {
      await sequelize.sync();
    } catch (err) {
      // Catch error here
      Logger.error(`Failed connection to the DB`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_Testprojekt_db;
  }
}

export default new Database();
