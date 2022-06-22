const express = require("express");
const app = express();

app.use(express.json());
var cors = require("cors");
app.use(cors());

app.use("/auth", require("./routes/auth"));
app.use("/posts", require("./routes/posts"));

app.listen(5000, () => {
  console.log("listening to port 5000");
});
