const fs = require("fs");
const path = require("path");
const rootDir = require(".././util/pathUtil");
const file = path.join(rootDir, "data", "homes.json");

// const registerHomes = [];

module.exports = class Home {
    constructor(houseName, price, location, rating, picUrl){
        this.houseName = houseName;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.picUrl = picUrl;
    }

    save(callback){
        Home.fetchAll(registerHomes => {
            registerHomes.push(this);

            fs.writeFile(file, JSON.stringify(registerHomes), callback);
        }); 
    }

    static fetchAll(callback){
        fs.readFile(file, (err, data) => {
            if (err) {
                callback([]);
            }
            else{
                callback(JSON.parse(data));
            }
        })
        
    }
}

// exports.registerHomes = registerHomes;
