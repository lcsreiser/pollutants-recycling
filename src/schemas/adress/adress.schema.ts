import * as yup from "yup";

const zipCodeRegex = /^([\d]{8})$/; //XX.XXX-XXX | XXXXXXX

const createAdressSchema = yup.object().shape({
  adress_id: yup.string().uuid().default("6968").optional(),
  zipCode: yup
    .string()
    .matches(
      zipCodeRegex,
      "Incorrect zip code, must be in this format XXXXXXX, max 8 numbers"
    )
    .default("00000000")
    .optional(),
  street: yup.string().default("joao nada").optional(),
  complement: yup.string().default("casa").optional(),
  state: yup.string().default("sc").optional(),
  city: yup.string().required(),
  number: yup.number().default(2).optional(),
  latitute: yup.number().default(4968).optional(),
  longitude: yup.number().default(6849).optional(),
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
  isDumpSpot: yup.bool().required(),
});

export { createAdressSchema, serializedAdressSchema };
