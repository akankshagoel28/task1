const express = require("express");
const app = express();
const port = process.env.PORT||5000;
app.use(express.json());
app.use(require("./routes/appRouter"));
// get driver connection
app.get("/", (req, res) => {
  res.send("Hello World!");
});
 
app.listen(port, () => {
  // perform a database connection when server starts
  // dbo.connectToServer(function (err) {
  //   if (err) console.error(err);
 
  // });
  console.log(`Server is running on port: ${port}`);
});