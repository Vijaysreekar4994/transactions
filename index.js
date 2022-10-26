let fs = require("fs");
let dataFile = "./data.json";
let obj = {
  transactions: [],
};
let json = [];

fs.readFile("data.json", "utf8", function readFileCallback(err, data) {
  if (err) {
    console.log(err);
  } else {
    if (data.length !== 0) {
      obj = JSON.parse(data);
    }
    obj.transactions.push({ id: 1, date: 26102022, amount: 7888 });
    json = JSON.stringify(obj);
    fs.writeFile("data.json", json, "utf8", function (err) {
      if (!err) {
        console.log("OK");
      }
    });
  }
});
