import express from 'express';
import orderController from '../conrollers/orderController.mjs';
import orderValidation from '../middlewires/validation/orderValidation.mjs';
const router = express.Router();
router
  .get('/:id', orderController.order)
  .route('/')
  .get(orderController.allOrders)
  .post(orderValidation.isValidOrder, orderController.createOrder)
  .put(orderController.updateOrder)
  .delete(orderController.deleteOrder);
export default router;
