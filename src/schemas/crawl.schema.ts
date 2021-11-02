import Joi from "joi";

export const crawlSchema = Joi.object({
  paths: Joi.array().items(Joi.string().uri().required()).required(),
  depth: Joi.number().optional(),
  http: Joi.boolean().optional().default(true),
});
