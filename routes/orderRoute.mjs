import express from 'express';
import orderController from '../conrollers/orderController.mjs';
import orderValidation from '../middlewires/validation/orderValidation.mjs';
const router = express.Router();
router
  .post('/', orderValidation.isValidOrder, orderController.createOrder)
  .get('/', orderController.allOrders)
  .route('/:id')
  .get(orderController.order)
  .put(orderValidation.isValidOrder, orderController.updateOrder)
  .delete(orderController.deleteOrder);
export default router;
