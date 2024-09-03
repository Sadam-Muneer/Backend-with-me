const fs = require("fs");
const os = require("os");
const _ = require("lodash");
const Notes = require("./notes");
const user = os.userInfo();
console.log(user.username);
fs.appendFile("sadam.txt", "hy+ \n", () => console.log("File is created"));
var age = Notes.age;
const result = Notes.addnumber(age + 18, 2);
console.log(result);
//-------------
const data = ["person", "person", 2, 2, 1, 3, 4, 5, 2, 3, 4, 5, 2, "Hello"];
const filter = _.uniq(data);
console.log(filter);
console.log(_.isString(3));
