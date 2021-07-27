import express from "express";
const app = express();

app.get(
  "/",
  (req, res, next) => {
    console.log("first");
    next();
  },
  (req, res, next) => {
    console.log("first2");
    res.send("hghhhh");
  }
);

app.use((req, res, next) => {
  res.status(404).send("없는 페이지 !!");
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("sry ~! ");
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`success ${port} ~!!!!!!!!!!!!!!!!!!!!`));
