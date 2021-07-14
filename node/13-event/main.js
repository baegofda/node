const logger = require("./logger.js");
const emitter = new logger.Logger();

emitter.on("log", (e) => {
  console.log(e);
});

emitter.log(() => {
  console.log("... doing something");
});
