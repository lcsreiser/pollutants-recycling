import * as yup from "yup";

const zipCodeRegex = /^([\d]{8})$/; //XX.XXX-XXX | XXXXXXX

const createDumpSpotSchema = yup.object().shape({
  name: yup.string().required(),
  address: yup.object().shape({
    zipCode: yup
      .string()
      .matches(
        zipCodeRegex,
        "Incorrect zip code, must be in this format XXXXXXX, max 8 numbers"
      )
      .required(),
    complement: yup.string().optional(),
    number: yup.number().required(),
    isDumpSpot: yup.bool().default(false).optional(),
  }),
});

const serializedCreateDumpSpotSchema = yup.object().shape({
  id: yup.string().uuid().required(),
  name: yup.string().required(),
  address: yup.object().shape({
    zipCode: yup.string().required(),
    street: yup.string().required(),
    complement: yup.string().optional(),
    number: yup.number().required(),
    latitude: yup.number().required(),
    longitude: yup.number().required(),
    isDumpSpot: yup.bool().default(false).optional(),
  }),
});

export {createDumpSpotSchema, serializedCreateDumpSpotSchema}