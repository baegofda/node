const fs = require("fs");

// 3
// rename(....., callback(err, data)) 비동기
// try{renameSync(.....)}catch(e){}blocking
// promises.rename().then().catch(0)

try {
  fs.renameSync("./file.txt", "./file-new.txt");
} catch (err) {
  console.error(err);
}

fs.rename("./text-new.txt", "./text.txt", (err) => {
  console.error(err);
});

fs.promises
  .rename("./file.txt", "./file-new.txt")
  .then(() => console.log("Done!"))
  .catch((err) => console.error(err));
