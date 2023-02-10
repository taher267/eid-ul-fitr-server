import Joi from 'joi';

const orderSchema = Joi.object({
  order_no: Joi.string().trim().required(),
  order_date: Joi.date().required(),
  quantity: Joi.number().required(),
  price: Joi.number().required(),
  discount: Joi.number(),
  due: Joi.number(),
  delivery_date: Joi.date().required(),
  status: Joi.string()
    .required()
    .valid('PROCESSING', 'ALTER', 'COMPLETED', 'DELIVERED'),
  order_type: Joi.string().required().valid('READYMADE', 'TAILORS'),
  delivery_details: Joi.string().trim(),
  notes: Joi.string().trim(),
}).required();

export default {
  isValidOrder: async (req, res, next) => {
    try {
      const { error, value } = orderSchema.validate(req.body, {
        abortEarly: false,
      });
      if (!error) {
        req.joiBody = value;
        return next();
      }
      const errors = error?.details?.reduce?.((a, { context, message }) => {
        a[context.key] = message?.replace(/"/g, '');
        return a;
      }, {});
      return res.status(400).json({ errors });
    } catch (e) {
      next({ message: e.message });
    }
  },
};
