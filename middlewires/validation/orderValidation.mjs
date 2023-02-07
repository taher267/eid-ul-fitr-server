import Joi from 'joi';

const isValidNewOrder = Joi.object({
  order_no: Joi.string().required(),
  order_date: Joi.date().required(),
  quantity: Joi.number().required(),
  price: Joi.number().required(),
  discount: Joi.number(),
  status: Joi.string().allow('PROCESSING', 'ALTER', 'COMPLETED', 'DELIVERED'),
  delivery_details: Joi.string().allow(''),
  delivery_date: Joi.date().required(),
  notes: Joi.string().allow(''),
}).required();
