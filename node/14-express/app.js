import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
const app = express();
const corsOptions = {
  origin: ["http://127.0.0.1:5500"],
  optionsSuccessStatus: 200,
  credentials: true,
};
app.use(express.json());
app.use(cookieParser()); // 쿠키를 사용하기위해
app.use(morgan("combined")); // 서버의 요청을 편하게 확인이 가능하다
app.use(helmet()); // 공통적으로 필요한 보안에 관련된 헤더들을 추가할 수 있다
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  console.log(req.body);
  console.log(req.cookies);
  res.send("Welcome!");
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`success ${port} ~!!!!!!!!!!!!!!!!!!!!`));
