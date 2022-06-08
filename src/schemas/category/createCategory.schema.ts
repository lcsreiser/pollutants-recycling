import * as yup from "yup"

const createCategorySchema = yup.object().shape({
    name: yup.string(),
    unit: yup.string(),
    description: yup.string(),
})

export { createCategorySchema }