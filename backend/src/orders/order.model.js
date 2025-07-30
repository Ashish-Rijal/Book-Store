const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    countary: String,
    stare: String,
    zipcode: String,
    phone: { type: Number, required: true },
    productId: [
      {
        type: mangoose.Schema.Type.ObjectId,
        ref: "Book",
        required: true,
      },
    ],

    totalPrice: { type: Number, required: true },
  },

  {
    timestamps: true,
  }
);

const Order = mangoose.model("Order", orderSchema);

module.exports = Order;
