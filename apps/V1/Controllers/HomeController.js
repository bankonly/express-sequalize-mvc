const Res = require("./Helpers/ResponseController");

class HomeController {
  constructor(req, res, next) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.body = req.body;
    this.params = req.params;
    this.return = Res(res);
  }
  get() {
    this.return.success("HELLO WORLD");
  }
}

module.exports = (...args) => new HomeController(...args);
