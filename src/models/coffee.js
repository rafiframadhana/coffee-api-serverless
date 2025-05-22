import mongoose from 'mongoose';

const coffeeSchema = new mongoose.Schema({
  item: String,
  src: String,
  contain: String,
  price: Number,
  description: String,
});

const Coffee = mongoose.model("Coffee", coffeeSchema);

export default Coffee;