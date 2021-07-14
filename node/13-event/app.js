const EventEmitter = require("events");
const emitter = new EventEmitter();

const cb1 = (args) => {
  console.log("first callback -", args);
};
emitter.on("juno", cb1);

emitter.on("juno", (args) => {
  console.log("second callback -", args);
});

emitter.emit("juno", { message: 1 });
emitter.emit("juno", { message: 2 });
emitter.removeListener("juno", cb1);
emitter.emit("juno", { message: 3 });
