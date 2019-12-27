const Express = require("express");
const app = Express();

// Load Default Config
require("./configs/default");

// load startup config
require("./configs/startup")(app);


// load api routes
require('./routes/api')(app)

app.listen(process.env.LOCAL_PORT, process.env.LOCAL_HOST, () =>
  console.log(`RUNNNING ${process.env.LOCAL_HOST}`)
);
