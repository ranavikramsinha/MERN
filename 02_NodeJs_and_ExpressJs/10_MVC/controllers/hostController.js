const registerHomes = [];
exports.getAddHome = (req, res, next) => {
    // res.sendFile(path.join(rootDir, "views", "addHome.html"));
    res.render("addHome", {pageTitle: "Add Home"});
  };

exports.postAddHome = (req, res, next) => {
  registerHomes.push(req.body);
  // console.log(registerHomes);
  res.render("homeAdded", {pageTitle: "Home Added"});
  // res.sendFile(path.join(rootDir, "views", "homeAdded.html"));
};

exports.registerHomes = registerHomes;
