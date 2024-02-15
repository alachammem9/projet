const mongoose = require("mongoose");
const schema = mongoose.Schema;
const busSchema = new schema({
  temps: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  trajet: {
    type: String,
    required: true,
  },
  capacité: {
    type: Number,
    required: true,
  },
  réservation:[]
});
module.exports = mongoose.model("bus", busSchema);
