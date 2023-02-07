import { isValidObjectId } from 'mongoose';
import orderServices from '../services/orderServices.mjs';

export default {
  allOrders: async (req, res) => {
    try {
      const all = await orderServices.findingOrder();
      res.json(all);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  },
  createOrder: async (req, res) => {
    try {
      const { joiBody } = req;
      const doesExist = await orderServices.findingOrder(
        'single',
        {
          order_id: joiBody?.order_id,
        },
        '_id'
      );
      if (doesExist)
        return res.status(400).json({ message: `Order no already exists` });
      const saved = await orderServices.newOrder(joiBody);
      res.json(saved);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
  order: async (req, res) => {
    try {
      const { id } = req.params;
      if (!isValidObjectId(id))
        return res.status(400).json({
          success: false,
          message: `Invalid query id!`,
        });
      const single = await orderServices.findingOrder('_id', id);
      res.json(single);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  },

  updateOrder: async (req, res) => {
    try {
      const { id } = req.params;
      if (!isValidObjectId(id))
        return res.status(400).json({
          success: false,
          message: `Invalid update id!`,
        });
      const { joiBody } = req;
      const updated = await orderServices.updatingOrder(id, joiBody, '_id');
      res.json(updated);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
  deleteOrder: async (req, res) => {
    try {
      const { id } = req.params;
      if (!isValidObjectId(id))
        return res.status(400).json({
          success: false,
          message: `Invalid delete id!`,
        });

      const deleted = await orderServices.deleteOrder(id);
      res.json(deleted);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
};
