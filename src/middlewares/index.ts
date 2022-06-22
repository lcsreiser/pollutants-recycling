import validateSchemaMiddleware from "./validateSchema.middleware";
import validateToken from "./validateToken.middleware";
import verifyCategoryExists from "./verifyCategoryExists.middleware";
import verifyDumpSpotExists from "./verifyDumpSpotExists.middleware";
import verifyUserExists from "./verifyUserExists.middleware";
import verifyCategoryIsAcceptedMiddleware from "./verifyCategoryIsAccepted.middleware";
import verifyZipCodeMiddleware from "./verifyZipCode.middleware";
import verifyOwner from "./verifyOwner.middleware";
import validateDumpSpotOrReceiver from "./validateDumpSpotOrReceiver.middleware";
import validateDate from "./validateDate.middleware";

export {
  validateDate,
  verifyOwner,
  validateDumpSpotOrReceiver,
  validateSchemaMiddleware,
  validateToken,
  verifyCategoryExists,
  verifyDumpSpotExists,
  verifyUserExists,
  verifyCategoryIsAcceptedMiddleware,
  verifyZipCodeMiddleware,
};
