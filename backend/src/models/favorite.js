const mongoose = require("mongoose");
const config = require("../utils/config");

const favoriteSchema = new mongoose.Schema({
  name: { type: String, minlength: 1, required: true },
  weight: { type: Number, required: false },
  price: { type: Number, required: false },
  roast: { type: String, required: false },
});

// instead of object._id be able to use object.id
favoriteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Favorite", favoriteSchema);
