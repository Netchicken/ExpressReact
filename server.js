const express = require("express");
const app = express();
const port = 5000; //react runs on 3000

app.get("/", (req, res) => {
  res.send(
    "Hello from the Express and ReactJS! this message is held in the server.js file"
  );
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
