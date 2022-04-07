const express = require("express");

const app = express();
const cors = require("cors");
const port = 8080;

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Hello World")
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
