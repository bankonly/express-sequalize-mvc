module.exports = app => {
  app.use("/users", require("../apps/Http/v1/Resources/Users/UserResources"));
  app.use(
    "/auth",
    require("../apps/Http/v1/Resources/Users/AuthenticationResource")
  );
  app.use(
    "/api/daily",
    require("../apps/Http/v1//Resources/Users/DailyPayResource")
  );
};
