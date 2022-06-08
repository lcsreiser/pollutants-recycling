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

export { createItemSchema };
