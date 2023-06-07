const fs = require("fs");
const path = require("path");
const globalJsdom = require("global-jsdom");

const html = fs.readFileSync(
  path.resolve(__dirname, "..", "index.html"),
  "utf-8"
);

globalJsdom(html);
// SWAP THE VALUES OF TWO VARIABLES USING 
// a. Temporary variable 
// b. Without a temporary variable 
let x = 7
let y = 9

// output x = 7 , y = 9