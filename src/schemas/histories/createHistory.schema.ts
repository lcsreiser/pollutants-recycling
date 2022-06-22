import * as yup from "yup";

const createHistorySchema = yup.object().shape({
    item: yup.string().required(),
    dumpSpot: yup.string().optional(),
    receiver: yup.string().optional()
})

const serializedCreateHistorySchema = yup.object().shape({
    history_id: yup.string().required(),
    date: yup.date().required(),
    provider: yup.object().shape({
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
    }).required(),
    dumpSpot: yup.object().shape({
        dumpSpot_id: yup.string().uuid().required(),
        name: yup.string().required(),
        address: yup.object().shape({
            zipCode: yup.string().required(),
            street: yup.string().required(),
            city: yup.string().required(),
            complement: yup.string().optional(),
            number: yup.number().required(),
            latitude: yup.number().required(),
            longitude: yup.number().required(),
            isDumpSpot: yup.bool().default(false).optional(),
        })
    }).optional()
})


export { createHistorySchema, serializedCreateHistorySchema }