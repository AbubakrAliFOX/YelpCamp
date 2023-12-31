const Campground = require("../models/campgrounds");
const { cloudinary } = require("../cloudinary");
const axios = require("axios");

module.exports.index = async (req, res) => {
  const campgrounds = await Campground.find({});
  const geoData = {
    type: "FeatureCollection",
    features: [],
  };
  for (const campground of campgrounds) {
    geoData.features.push({
      type: "Feature",
      properties: {},
      geometry: campground.geometry,
      title: campground.title,
      id: campground._id
    });
  }
  const campgrondsGeoJSON = JSON.stringify(geoData);
  res.render("campgrounds/index", { campgrounds, campgrondsGeoJSON });
};

module.exports.renderNewForm = (req, res) => {
  res.render("campgrounds/new");
};

module.exports.createCampground = async (req, res, next) => {
  const campground = new Campground(req.body.campground);
  campground.images = req.files.map((f) => ({
    url: f.path,
    filename: f.filename,
  }));
  campground.author = req.user._id;
  const geocode = await axios.get(
    `https://nominatim.openstreetmap.org/search?q=${campground.location}&format=geojson`
  );
  campground.geometry = geocode.data.features[0].geometry || "No Data Found";
  await campground.save();
  req.flash("success", "Successfully made a new campground!");
  res.redirect(`/campgrounds/${campground._id}`);
};

module.exports.showCampground = async (req, res) => {
  const campground = await Campground.findById(req.params.id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("author");
  if (!campground) {
    req.flash("error", "Cannot find that campground!");
    return res.redirect("/campgrounds");
  }
  res.render("campgrounds/show", { campground });
};

module.exports.renderEditForm = async (req, res) => {
  const { id } = req.params;
  const campground = await Campground.findById(id);
  if (!campground) {
    req.flash("error", "Cannot find that campground!");
    return res.redirect("/campgrounds");
  }
  res.render("campgrounds/edit", { campground });
};

module.exports.updateCampground = async (req, res) => {
  const { id } = req.params;
  const geocode = await axios.get(
    `https://nominatim.openstreetmap.org/search?q=${req.body.campground.location}&format=geojson`
  );
  const campground = await Campground.findByIdAndUpdate(id, {
    ...req.body.campground,
  });
  const imgs = req.files.map((f) => ({ url: f.path, filename: f.filename }));
  campground.images.push(...imgs);
  if (req.body.deleteImages) {
    for (let filename of req.body.deleteImages) {
      await cloudinary.uploader.destroy(filename);
    }
    await campground.updateOne({
      $pull: { images: { filename: { $in: req.body.deleteImages } } },
    });
  }
  campground.geometry = geocode.data.features[0].geometry || "No Data Found";
  await campground.save();
  req.flash("success", "Successfully updated!");
  res.redirect(`/campgrounds/${campground._id}`);
};

module.exports.deleteCampground = async (req, res) => {
  const { id } = req.params;
  await Campground.findByIdAndDelete(id);
  req.flash("success", "Successfully deleted campground!");
  res.redirect("/campgrounds");
};
