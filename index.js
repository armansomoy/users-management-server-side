const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// middleware
app.use(cors());

const users = [
  { id: 1, name: "rubana", email: "rubana@gmail.com" },
  { id: 2, name: "sabana", email: "sabana@gmail.com" },
  { id: 3, name: "rupa", email: "rupa@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("User management server is running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`server is running : ${port}`);
});
