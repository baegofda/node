const fs = require("fs");

const writeStream = fs.createWriteStream("./file3.txt");
writeStream.on("finish", () => {
  console.log("end");
});

writeStream.write("hello!");
writeStream.write("hello!");
