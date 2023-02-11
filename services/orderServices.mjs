import Order from '../models/Order.mjs';

export default {
  findingOrder: (key, value, select) => {
    if (key === '_id') return Order.findById(value).select(select);
    if (key === 'single') return Order.findOne(value).select(select).exec();
    return Order.find(value).select(select).exec();
  },
  newOrder: ({
    // order_no, order_date, quantity, price, discount, status, delivery_date,
    delivery_details,
    notes,
    ...rest
  }) => {
    const newData = {
      ...rest,
    };
    if (notes) newData.notes = notes;
    if (delivery_details) newData.delivery_details = delivery_details;
    return Order.create(newData);
  },
  deleteOrder: (id) => Order.findByIdAndDelete(id),
  updatingOrder: (id, update, options, select) => {
    return Order.findByIdAndUpdate(id, update, options).select(select);
  },
};
