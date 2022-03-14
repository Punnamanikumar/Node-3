const express = require("express");
const empRouter = require("./router");
const app = express();
const cors = require("cors");

// app.use("/api", (req, res) => {
//   res.send("API ROUTE");
// });
app.use(cors());
app.use("/api", empRouter);

app.listen(4004, () => {
  console.log("App started");
});
