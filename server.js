const express = require("express");
const app = require('express')();
const port = process.env.PORT||5000;
app.use(express.json());
var http = require('http');

// get driver connection
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
 
// app.listen(port, () => {
//   // perform a database connection when server starts
//   // dbo.connectToServer(function (err) {
//   //   if (err) console.error(err);
 
//   // });
//   console.log(`Server is running on port: ${port}`);
// });
function addRoutes(){
  var httpServer = http.createServer(app);
  
  
  var applicationRouter = require('./routers/appRouter').router;
app.use("/", applicationRouter);
app.use(function (err, req, res, next) {

});

server = httpServer.listen(port, () =>{
  console.log(`Server is running on port: ${port}`);
});
}
addRoutes();
module.exports = server;
