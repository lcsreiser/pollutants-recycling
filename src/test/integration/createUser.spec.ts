import supertest from "supertest";
import { Connection, generateUser } from "..";
import app from "../../app";
import { Address, User } from "../../entities";
import { userService } from "../../services";
import AppDataSource from "../../data-source";

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
    const user = {
      name: "john",
      email: "john@mail.com",
      password: "123456",
      address: {
        zipCode: "88085435",
        number: 300,
        complement: "casa",
      },
    };

    const response = await supertest(app)
      .post("/users/signup")
      .send({ ...user });

    // console.log(response);
    // console.log(response.body);

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("email");
    expect(response.body.email).toEqual(user.email);
  });

  it("Return: Body error, missing password | Status code: 400", async () => {
    const { password, ...user } = {
      name: "john",
      email: "john@mail.com",
      password: "123456",
      address: {
        zipCode: "88085435",
        number: 300,
        complement: "casa",
      },
    };
    const response = await supertest(app)
      .post("/users/signup")
      .send({ ...user });

    console.log(response.body.message.error);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message");
    expect(response.body.message.error).toEqual([
      "password is a required field",
    ]);
  });
});
