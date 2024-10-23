const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

const viewRouter = require("./router/viewRouter");
const contentRouter = require("./router/contentRouter");
const imageRouter = require("./router/imageRouter");

app.use(cors());

app.set("view engine", "pug");
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json({ limit: '10kb'}));

if(process.env.NODE_ENV === "development") {
    app.use(morgan("combined"));
}

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  res.setHeader(
    "Content-Security-Policy",
    "default-src script-src 'self' data https://apis.google.com "
  );
  next();
});

app.use("/", viewRouter);
app.use("/v1/api/content", contentRouter);
app.use("/v1/api/docs", imageRouter);

app.use((err, req, res, next) => {

    res.status(500).json({
        fail: true,
        message: err.message
    })
})


module.exports = app;