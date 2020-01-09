class HelperController {
  getOnlyDate() {
    var date = new Date();
    var y = date.getFullYear();
    var d = date.getDate();
    var m = date.getMonth();
    return `${y}-${m+1}-${d}`;
  }
}

module.exports = new HelperController();
