const fs = require("fs");
const path = require("path");
const rootDir = require("../util/pathUtil");
const favouriteFile = path.join(rootDir, "data", "favourite.json");

module.exports = class Favourite {

  static fetchAll(callback) {
    fs.readFile(favouriteFile, (err, data) => {
      if (err) {
        callback([]);
      } else {
        callback(JSON.parse(data));
      }
    });
  }

  static addToFavourites(homeId, callback){
    Favourite.fetchAll((favouriteId) => {
      favouriteId.push(homeId);

      fs.writeFile(favouriteFile, JSON.stringify(favouriteId), callback);
    });
  }

};


