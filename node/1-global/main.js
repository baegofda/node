const fs = require("fs");

// javascript는 브라우저에서 window라는 최상위 객체가있지만 node는 global이라는 객체가 존재한다.
console.log(global);

global.hello = () => {
  global.console.log("hello");
};

global.hello();
hello();
