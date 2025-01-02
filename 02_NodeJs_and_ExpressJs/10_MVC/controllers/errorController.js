exports.get404Error = (req, res, next) => {
    // res.status(404).sendFile(path.join(rootDir, "views", "404error.html"));
    res.statusCode = 404;
    res.render("404error", { pageTitle: "404 Error"});
  }