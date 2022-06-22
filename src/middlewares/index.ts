import validateSchemaMiddleware from "./validateSchema.middleware";
import validateToken from "./validateToken.middleware";
import verifyCategoryExists from "./verifyCategoryExists.middleware";
import verifyDumpSpotExists from "./verifyDumpSpotExists.middleware";
import verifyUserExists from "./verifyUserExists.middleware";
import verifyCategoryIsAcceptedMiddleware from "./verifyCategoryIsAccepted.middleware";
import verifyZipCodeMiddleware from "./verifyZipCode.middleware";
import { obtaintLocationMiddleware } from "./obtainLocation.middleware";

export {
  validateSchemaMiddleware,
  validateToken,
  verifyCategoryExists,
  verifyDumpSpotExists,
  verifyUserExists,
  verifyCategoryIsAcceptedMiddleware,
  verifyZipCodeMiddleware,
  obtaintLocationMiddleware,
};
