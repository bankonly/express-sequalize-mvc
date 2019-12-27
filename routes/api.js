module.exports = (app) => {
  app.use("/users", require("../apps/http/v1/resources/users/UserResources"));
};
