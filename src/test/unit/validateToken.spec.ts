import { validateToken } from "../../middlewares";
import { config } from "dotenv";
import { ErrorHandler } from "../../errors/appError";
import { NextFunction, Request, Response } from "express";
import { sign } from "jsonwebtoken";

config();

describe("validateToken Middleware tests", () => {
  const mockReq: Partial<Request> = {};
  const _: Partial<Response> = {};
  const nextFunc: NextFunction = jest.fn();

  it("Error: Missing authorization token. | Status code: 400", () => {
    mockReq.headers = {};

    try {
      validateToken(mockReq as Request, _ as Response, nextFunc);
    } catch (err) {
      expect(err).toBeInstanceOf(ErrorHandler);
      expect(err.message).toBe("Missing authorization token.");
      expect(err.statusCode).toBe(400);
    }
  });

  it("Error: jwt malformed | Status code: 401", () => {
    mockReq.headers = {
      authorization: "Token a654fd56asf4as",
    };

    try {
      validateToken(mockReq as Request, _ as Response, nextFunc);
    } catch (err) {
      expect(err).toBeInstanceOf(ErrorHandler);
      expect(err.message).toBe("jwt malformed");
      expect(err.statusCode).toBe(401);
    }
  });

  it("Will call next function and ad 'decoded' key on mockReq object.", () => {
    const emailTest = "emailtest@test.com.br";
    const token = sign({ email: emailTest }, process.env.SECRET_KEY);

    mockReq.headers = {
      authorization: `Token ${token}`,
    };

    validateToken(mockReq as Request, _ as Response, nextFunc);

    expect(nextFunc).toBeCalled();
    expect(nextFunc).toBeCalledTimes(1);

    expect(mockReq).toHaveProperty("decoded");
    expect(mockReq.decoded.email).toStrictEqual(emailTest);
  });
});
