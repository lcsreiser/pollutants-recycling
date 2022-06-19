import supertest from "supertest";
import { Connection } from "..";
import app from "../../app";
import { User } from "../../entities";

describe("Create user router | Integration tests", () => {
  const dbConnection = new Connection();

  beforeAll(async () => {
    await dbConnection.create();
  });
  afterAll(async () => {
    await dbConnection.clear();
    await dbConnection.close();
  });
  beforeEach(async () => {
    await dbConnection.clear();
  });

  it("Return: User as JSON response | Status code: 201", async () => {
    const user: Partial<User> = {
      name: "john",
      email: "email@test.com",
      password: "1234",
    };

    const response = await supertest(app)
      .post("/users/signup")
      .send({ ...user });

    expect(response.statusCode).toBe(201);
    //no teste ta retornando 400, acho que é porque falta o endereço mas não estou sabendo colocar
    expect(response.body).toHaveProperty("email");
    expect(response.body.email).toStrictEqual(user.email);
  });
});
