import mongoose from 'mongoose';

const coffeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  roastLevel: {
    type: String,
    required: true,
  },
  flavorNotes: {
    type: [String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Coffee = mongoose.model("Coffee", coffeeSchema);

export default Coffee;