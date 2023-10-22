const mongoose = require("mongoose");
const Campground = require("../models/campgrounds");
const cities = require("./cities");
const { places, descriptors, campgroundDescriptions, campImages } = require("./seedHelpers");
require('dotenv').config();
const dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database Connected");
});

// const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 40; i++) {
    // const random1000 = Math.floor(Math.random() * 1000);
    const num1 = Math.floor(Math.random() * campImages.length);
    const num2 = Math.floor(Math.random() * campImages.length);
    const num3 = Math.floor(Math.random() * campImages.length);
    const randPrice = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: "6534bd63450d90da4ef32fd9",
      location: `${cities[i].city}, ${cities[i].country}`,
      title: `${descriptors[i]} ${places[i]}`,
      description:
        campgroundDescriptions[i],
      price: randPrice,
      geometry: {
        type: "Point",
        coordinates: [
          cities[i].geometry.coordinates[0],
          cities[i].geometry.coordinates[1],
        ]
      },
      images: [
        campImages[num1],
        campImages[num2],
        campImages[num3]
      ],
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
