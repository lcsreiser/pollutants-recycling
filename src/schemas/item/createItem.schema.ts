import * as yup from "yup";

const createItemSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  category: yup
    .mixed()
    .oneOf(["óleo", "eletrônicos", "medicamentos"])
    .required(),
  quantity: yup.number().required(),
});

const serializedCreateItemSchema = yup.object().shape({
  id: yup.string().uuid().required(),
  name: yup.string().required(),
  description: yup.string().required(),
  category: yup.object().shape({
    name: yup.string().required(),
  }),
  owner: yup.object().shape({
    name: yup.string().required(),
  }),
});

export { createItemSchema, serializedCreateItemSchema };
