import AppDataSource from "../data-source";
import { faker } from "@faker-js/faker";
import { existsSync } from "fs";
import path from "path";
import { unlink } from "fs/promises";
import { Address, User } from "../entities";
import { DataSource } from "typeorm";

const generateUser = (): Partial<User> => {
  const name = faker.name.firstName().toLowerCase();
  const email = faker.internet.email(name).toLowerCase();
  const password = faker.datatype.string(10);
  const address = {
    zipCode: faker.address.zipCode("########"),
    complement: "casa",
    number: faker.address.buildingNumber(),
  };

  return { email, password };
};

class Connection {
  dbPath: string;
  dbConnection: Promise<DataSource>;

  constructor() {
    this.dbPath = path.join(__dirname, "../../dbTest.sqlite");
  }

  create = async () => {
    if (existsSync(this.dbPath)) {
      await unlink(this.dbPath);
    }

    this.dbConnection = AppDataSource.initialize();
  };

  close = async () => {
    const connection = await this.dbConnection;
    await connection.destroy();

    if (existsSync(this.dbPath)) {
      await unlink(this.dbPath);
    }
  };

  clear = async () => {
    const connection = await this.dbConnection;
    const entities = connection.entityMetadatas;

    entities.forEach(async (entity) => {
      const repository = connection.getRepository(entity.name);
      await repository.query(`DELETE FROM ${entity.tableName}`);
    });
  };
}

export { Connection, generateUser };
