const Home = require("./../models/home");

exports.getHomePage = (req, res, next) => {
    Home.fetchAll(registerHomes => {
        res.render("homePage", { homes: registerHomes, pageTitle: "Airbnb"});
    })
  };