const Express = require("express");
const app = Express();

// Load Default Config
require("./configs/default");

// load database config
require("./configs/db")

// load startup config
require("./configs/startup")(app);

// load global varibale
require("./configs/globalvaraiable")(app);

// load api routes
require("./routes/api")(app);
require("./routes/admin")(app);

app.listen(process.env.LOCAL_PORT, process.env.LOCAL_HOST, () =>
  console.log(`RUNNNING ${process.env.LOCAL_HOST}`)
);
