const { registerHomes } = require("./hostController");

exports.getHomePage = (req, res, next) => {
    console.log(registerHomes);
    // res.sendFile(path.join(rootDir, "views", "homePage.html"));
    res.render("homePage", { homes: registerHomes, pageTitle: "Airbnb"});
  };