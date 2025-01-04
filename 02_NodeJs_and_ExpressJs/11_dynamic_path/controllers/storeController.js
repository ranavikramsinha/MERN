const Home = require("./../models/home");

// exports.getHomePage = (req, res, next) => {
//     Home.fetchAll(registerHomes => {
//         res.render("store/homePage", { homes: registerHomes, pageTitle: "Airbnb"});
//     })
//   };

  exports.getHomePage = (req, res, next) => {
    Home.fetchAll(registerHomes => {
        res.render("store/homePage", { homes: registerHomes, pageTitle: "Airbnb"});
    })
  };

  exports.getHomes = (req, res, next) => {
    Home.fetchAll(registerHomes => {
        res.render("store/homes", { homes: registerHomes, pageTitle: "Airbnb"});
    })
  };