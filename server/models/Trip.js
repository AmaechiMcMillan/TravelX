const { Schema, model } = require("mongoose");

const tripSchema = new Schema({
  adults: {
    type: Number,
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  departureDate: {
    type: String,
    required: true,
  },
  returnDate: {
    type: String,
    required: true,
  },
});

const Trip = model("Trip", tripSchema);

module.exports = Trip;
