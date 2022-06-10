import * as yup from "yup";

const zipCodeRegex = /^([\d]{8})$/; //XX.XXX-XXX | XXXXXXX

const createAdressSchema = yup.object().shape({
  adress_id: yup.string().uuid().required(),
  zipCode: yup
    .string()
    .matches(
      zipCodeRegex,
      "Incorrect zip code, must be in this format XXXXXXX, max 8 numbers"
    )
    .required(),
  street: yup.string().required(),
  complement: yup.string().optional(),
  state: yup.string().required(),
  number: yup.number().required(),
  latitute: yup.number().required(),
  longitude: yup.number().required(),
  isDumpSpot: yup.bool().default(false).optional(),
});

const serializedAdressSchema = yup.object().shape({
  adress_id: yup.string().uuid().required(),
  zipCode: yup
    .string()
    .matches(
      zipCodeRegex,
      "Incorrect zip code, must be in this format XXXXXXX, max 8 numbers"
    )
    .required(),
  street: yup.string().required(),
  complement: yup.string().optional(),
  state: yup.string().required(),
  number: yup.number().required(),
  latitute: yup.number().required(),
  longitude: yup.number().required(),
  isDumpSpot: yup.bool().default(false).optional(),
});

export { createAdressSchema, serializedAdressSchema };
