module.exports = app => {
  app.use(
    "/admin/currency",
    require("../apps/Http/v1/Resources/Admin/CurrencyResource")
  );
};
