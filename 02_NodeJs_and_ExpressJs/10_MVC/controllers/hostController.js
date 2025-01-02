const Home = require("./../models/home");

exports.getAddHome = (req, res, next) => {
    // res.sendFile(path.join(rootDir, "views", "addHome.html"));
    res.render("addHome", {pageTitle: "Add Home"});
  };

exports.postAddHome = (req, res, next) => {
  console.log(req.body);
//   const houseName = req.body.houseName;
//   const price = req.body.price;
//   const location = req.body.location;
//   const rating = req.body.rating;

  const {houseName, price, location, rating, picUrl} = req.body;

  const newHome = new Home(houseName, price, location, rating, picUrl);

  newHome.save(error => {
    if(error){
        res.redirect("/");
    }
    else{
        res.render("homeAdded", {pageTitle: "Home Added"});  
    }
  });
};

