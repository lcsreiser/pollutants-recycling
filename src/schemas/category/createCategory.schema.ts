import * as yup from "yup"

const serializedCategorySchema = yup.object().shape({
    id: yup.string().uuid().required(),
    name: yup.string().required(),
    unit: yup.string().required(),
    description: yup.string().required(),
})

export { serializedCategorySchema }