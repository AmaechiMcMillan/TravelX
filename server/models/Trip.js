const { Schema, model } = require("mongoose");
const Profile = require("./Profile");

const tripSchema = new Schema({
  adults: {
    type: Number,
    // required: true,
  },
  origin: {
    type: String,
    // required: true,
  },
  destination: {
    type: String,
    // required: true,
  },
  departureDate: {
    type: String,
    // required: true,
  },
  returnDate: {
    type: String,
    // required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "Profile",
  },
});

const Trip = model("Trip", tripSchema);

module.exports = Trip;
