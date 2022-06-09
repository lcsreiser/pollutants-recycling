import * as yup from "yup";

const createTransactionSchema = yup.object().shape({
  item: yup.string().uuid().required(),
  provider: yup.string().uuid().required(),
  collector: yup.string().uuid().required(),
  date: yup.date().required(),
});

const serializedCreateTransactionSchema = yup.object().shape({
  id: yup.string().uuid().required(),
  item: yup.string().uuid().required(),
  provider: yup.string().uuid().required(),
  collector: yup.string().uuid().required(),
  date: yup.date().required(),
});

export { createTransactionSchema, serializedCreateTransactionSchema };
