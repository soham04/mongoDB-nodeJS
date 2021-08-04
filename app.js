// using Mongoose
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitDB", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Fruit = mongoose.model("FRUIT", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit",
});

fruit.save(); // insertion of single data

Fruit.insertMany(
  // insertion of multitple rows
  [{ name: "Kiwi" }, { name: "Banana" }, { name: "Cheese" }],
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully saved all the fruits");
    }
  }
);

Fruit.find(function (err, fruits) {
  //reading the data
  if (err) {
    console.log(err);
  } else {
    console.log(fruits);
  }

  fruits.forEach(function (fruit) {
    console.log(fruit.name);
  });
});
