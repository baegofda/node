const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const password = "12345678";
const secret = "424242";
const hashed = bcrypt.hashSync(password, 10);

console.log(`password : ${password}, hashed: ${hashed}`);

const result = bcrypt.compareSync(password, hashed);

console.log(result);

const token = jwt.sign(
  {
    id: "userId",
    isAdmin: true,
  },
  secret,
  { expiresIn: 2 } // 토큰 expired
);

jwt.verify(token, secret, (error, decode) => {
  console.log(error, decode);
});
console.log(token);
