import * as yup from "yup";

// const zipCodeRegex2 = /^([\d]{2}){1}\.?([\d]{3}){1}\-?([\d]{3}$)/; //XX.XXX-XXX | XXXXXXX
const zipCodeRegex = /^([\d]{8})$/; //XX.XXX-XXX | XXXXXXX

const createUserSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().lowercase().required(),
  password: yup.string().required(),
  address: yup.object().shape({
    zipCode: yup
      .string()
      .matches(
        zipCodeRegex,
        "Incorrect zip code, must be in this format XXXXXXX, max 8 numbers"
      )
      .optional(),
    complement: yup.string().optional(),
    number: yup.number().required(),
    isDumpSpot: yup.bool().default(false).optional(),
  }),
});

// const createUserSchema = yup.object().shape({
//   name: yup.string().required(),
//   email: yup.string().email().lowercase().required(),
//   password: yup.string().required(),
//   address: yup.string().required(),
// });

const serializedCreateUserSchema = yup.object().shape({
  userId: yup.string().uuid().required(),
  name: yup.string().required(),
  email: yup.string().email().required(),
  address: yup.object().shape({
    zipCode: yup.string().required(),
    street: yup.string().required(),
    complement: yup.string().required(),
    number: yup.number().required(),
    isDumpSpot: yup.bool().required(),
  }),
});

export { createUserSchema, serializedCreateUserSchema };
