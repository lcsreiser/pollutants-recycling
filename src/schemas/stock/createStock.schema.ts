import * as yup from "yup";

const createStockSchema = yup.object().shape({
  category: yup.string().uuid().required(),
  dumpSpot: yup.string().uuid().required(),
  quantity: yup.number().required(),
});

const serializedCreateStockSchema = yup.object().shape({
  id: yup.string().uuid().required(),
  category: yup.string().uuid().required(),
  dumpSpot: yup.string().uuid().required(),
  quantity: yup.number().required(),
});

export { createStockSchema, serializedCreateStockSchema };
