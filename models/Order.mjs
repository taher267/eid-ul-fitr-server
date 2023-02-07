import mongoose from 'mongoose';

export default mongoose.model(
  'Order',
  new mongoose.Schema({
    order_no: {
      type: String,
      required: [true, 'Order no is mandatory!'],
      unique: [true, 'Order no should be unique'],
    },
    order_date: { type: Date, required: [true, 'Date is mandatory!'] },

    delivery_details: String,
    quantity: { type: Number, required: [true, 'Quantiry is mandatory!'] },
    price: { type: Number, required: [true, 'Price is mandatory!'] },
    discount: Number,
    status: {
      type: String,
      enum: ['PROCESSING', 'ALTER', 'COMPLETED', 'DELIVERED'],
      default: 'PROCESSING',
    },
    delivery_date: {
      type: Date,
      required: [true, 'Delivery date is mandatory!'],
    },
    notes: String,
  })
);
