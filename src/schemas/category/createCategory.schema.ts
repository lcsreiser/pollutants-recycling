import * as yup from "yup"

const createCategorySchema = yup.object().shape({
    name: yup.string().required(),
    unit: yup.string().required(),
    description: yup.string().required(),
})

const serializedCategoriesSchema = yup.array().of(
        yup.object().shape({
            categoryId: yup.string().uuid().required(),
            name: yup.string().required(),
            unit: yup.string().required(),
            description: yup.string().required(),
        })
    )
    .nullable()

export { createCategorySchema, serializedCategoriesSchema }