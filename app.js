const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

global.io = io;

app.use(express.static(__dirname + "/views"));

// Load Default Config
require("./configs/default");

// load database config
require("./configs/db");

// load startup config
require("./configs/startup")(app);

// load api routes
require("./routes/api")(app);
require("./routes/admin")(app);
require("./routes/view")(app);


io.on("connection", client => {
  global.socket = client;
  client.on("onJoin", d => {
    console.log(d + "))");
    client.emit("emitJoin", d);
    client.broadcast.emit("emitJoin", d);
  });
});

server.listen(process.env.LOCAL_PORT, process.env.LOCAL_HOST, () =>
  console.log(`RUNNNING ${process.env.LOCAL_HOST}:${process.env.LOCAL_PORT}`)
);
