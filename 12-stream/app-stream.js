const fs = require("fs");

const readStream = fs.createReadStream("./file.txt", {
  highWaterMark: 8,
  encoding: "utf-8",
});

const data = [];
readStream.on("data", (chunk) => {
  data.push(chunk);
  console.count("data");
});

readStream.on("end", () => {
  console.log(data.join(""));
});
readStream.on("error", (err) => {
  console.log(err);
});
