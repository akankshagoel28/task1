const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT||5000;
app.use(express.json());
app.use(require("./routes/appRouter"));
// get driver connection
const mongoString = process.env.MONGODB_URL;
app.get("/", (req, res) => {
  res.send("Hello World!");
});
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
 
app.listen(port, () => {
  // perform a database connection when server starts
  console.log(`Server is running on port: ${port}`);
});