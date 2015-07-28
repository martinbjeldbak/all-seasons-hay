var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json('its working (root api routee)');
});

router.get('/products', function(req, res, next) {
  var products = {
    products: ["Hay", "Equine Feed", "Grains", "Livestock feed", "Supplements", "Dog", "Cat", "Poultry/game bird", "Bird seed", "Small pet", "Fish", "Bedding/Shavings", "Corrals and Gates", "Fencing", "Tanks and Feeders", "Carts", "Coops and Cages", "Stall mats", "Tack", "Pest control", "Grooming"]};

    res.json(products);
});

router.get('/companyinfo', function(req, res, next) {
  res.json({
    tagline: "Family owned and operated since 1982.",
    appName: "All Seasons Hay Co.",
    products: "products",
    about: "about us",
    photos: "photos",
    contact: "contact us",
    email: "allseasonshay@gmail.com",
    phone1: "909.795.2921",
    phone2: "909.795.2245",
    fax: "909.795.2252",
    addressStreet: "621 West Avenue L",
    addressCity: "Calimesa",
    addressState: "CA",
    addressZip: "92320",
    addressGmaps: "https://www.google.com/maps/place/621+W+Ave+L,+Calimesa,+CA+92320/@33.9990765,-117.0615894,634m/data=!3m1!1e3!4m2!3m1!1s0x80db50bc0ad2098b:0x3bd636c64f1bf3aa!6m1!1e1"
  });
});

module.exports = router;
