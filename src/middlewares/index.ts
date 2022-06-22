import validateSchemaMiddleware from "./validateSchema.middleware";
import validateToken from "./validateToken.middleware";
import verifyCategoryExists from "./verifyCategoryExists.middleware";
import verifyDumpSpotExists from "./verifyDumpSpotExists.middleware";
import verifyUserExists from "./verifyUserExists.middleware";
import verifyCategoryIsAcceptedMiddleware from "./verifyCategoryIsAccepted.middleware";
import verifyZipCodeMiddleware from "./verifyZipCode.middleware";
import verifyOwner from "./verifyOwner.middleware";
import validateDumpSpot from "./validateDumpSpot.middleware";
import validateDate from "./validateDate.middleware";
import { obtaintLocationMiddleware } from "./obtainLocation.middleware";

export {
  validateDate,
  verifyOwner,
  validateDumpSpot,
  validateSchemaMiddleware,
  validateToken,
  verifyCategoryExists,
  verifyDumpSpotExists,
  verifyUserExists,
  verifyCategoryIsAcceptedMiddleware,
  verifyZipCodeMiddleware,
  obtaintLocationMiddleware,
};
