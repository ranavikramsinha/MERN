const Favourite = require("../models/favourite");
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

  exports.getFav = (req, res, next) => {
    Favourite.fetchAll(favouriteId => {
      Home.fetchAll(registerHomes => {
        const favouriteHomes = registerHomes.filter(home => favouriteId.includes(home.id));
        res.render("store/favourites", { homes: favouriteHomes, pageTitle: "Favourites"});
      });
    })
  };

  exports.postAddFav = (req, res, next) => {
    console.log("Came to Add Favourites",req.body);
    const homeId = req.body.id;
    Favourite.addToFavourites(homeId, error => {
      if(error){
        console.log("Error while adding to favourites", error);
      }
      
      res.redirect("/favourites");

    })
  }

  exports.getHomeDetails = (req, res, next) => {
    const homeId = req.params.homeIdentity;
    Home.findById(homeId, home => {
      if(!home){
        console.log("Home not found");
        return res.redirect("/homes");
      }
      console.log("Came to Detail Page", homeId, home);

      res.render("store/homeDetail", { home: home, pageTitle: "Your's Home Details"});
    })
  };
