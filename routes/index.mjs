import express from 'express';
const routers = express.Router();
import orderRoute from './orderRoute.mjs';
routers.use('/orders', orderRoute);
export default routers;
