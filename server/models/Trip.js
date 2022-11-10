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
    type: Date(YYYY - MM - DD),
    required: true,
  },
});

const Trip = model("Trip", tripSchema);

module.exports = Trip;
