const mongoose = require("mongoose");
const Campground = require("../models/campgrounds");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
mongoose.connect("mongodb://127.0.0.1:27017/yelp-camp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database Connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 200; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const randPrice = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: "6518ebfba7b58a06c3f30a46",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem unde perspiciatis doloribus impedit, consectetur eligendi dignissimos dolores. Adipisci natus voluptas voluptate nam cumque perferendis dolorum praesentium, voluptatem perspiciatis, earum suscipit",
      price: randPrice,
      geometry: {
        type: "Point",
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude,
        ]
      },
      images: [
        {
          url: "https://res.cloudinary.com/dewpck9nt/image/upload/v1696244107/YelpCamp/ociocxznbh2gdlpgrtia.jpg",
          filename: "YelpCamp/ociocxznbh2gdlpgrtia",
        },
        {
          url: "https://res.cloudinary.com/dewpck9nt/image/upload/v1696244109/YelpCamp/o8edi1mtlpccdmexjwsn.jpg",
          filename: "YelpCamp/o8edi1mtlpccdmexjwsn",
        },
        {
          url: "https://res.cloudinary.com/dewpck9nt/image/upload/v1696244111/YelpCamp/uwnusro8pfpwjfjmhyrp.jpg",
          filename: "YelpCamp/uwnusro8pfpwjfjmhyrp",
        },
      ],
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
