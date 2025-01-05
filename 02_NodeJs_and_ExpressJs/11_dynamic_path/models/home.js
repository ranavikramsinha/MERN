const fs = require("fs");
const path = require("path");
const rootDir = require("../util/pathUtil");
const file = path.join(rootDir, "data", "homes.json");

module.exports = class Home {
  constructor(houseName, price, location, rating, picUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.picUrl = picUrl;
  }

  save(callback) {
    this.id = Math.random().toString();
    Home.fetchAll((registerHomes) => {
      registerHomes.push(this);

      fs.writeFile(file, JSON.stringify(registerHomes), callback);
    });
  }

  static fetchAll(callback) {
    fs.readFile(file, (err, data) => {
      if (err) {
        callback([]);
      } else {
        callback(JSON.parse(data));
      }
    });
  }

  static findById(homeId, callback){
    Home.fetchAll(homes => {
      const home = homes.find(home => home.id === homeId);
      callback(home);
    })
  }
};


