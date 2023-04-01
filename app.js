const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');
const express = require("express");
const app = express();
const fruitSchema = new mongoose.Schema({
    name: {type:String,
    required:[true,"Please check, no name specified"]},
    rating: {type:Number,
    min:1,
    max:10},
    review: String
});
const Fruit = mongoose.model("Fruit",fruitSchema);
const fruit = new Fruit({
    name:"Apple",
    rating:8,
    review: "Chinese Fuji is the best."
});


// fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});
const Person = mongoose.model("Person",personSchema);

const orange = new Fruit({
    // name:"Orange",
    rating: 9.5,
    review: "Miami's is the best."
});

const banana = new Fruit({
    name:"Banana",
    rating:8,
    review: "Banana is the cheapest fruit."
});
const kiwi = new Fruit({
    name:"Kiwi",
    rating:8,
    review: "Newzealand kiwi is the best."
});
const peach = new Fruit({
    name:"Peach",
    rating:8,
    review: "My home peach is the best."
});

const person = new Person({
    name:"Lora",
    age:16,
    favoriteFruit: kiwi

});

person.save();

//   app.get("/", async (req, res) => {
//     try {
//       const fruits = await Fruit.insertMany([kiwi,peach]);
//       res.send(fruits);
//       console.log(fruits);
//     } catch (err) {
//       console.log(err);
//     }
//   });



app.listen(3000,function(){
    console.log("Server is running on port 3000.")
});
// mongoose.connection.close();