var addDays = require("date-fns/addDays");
module.exports = function (x) {
  let newDate = addDays(new Date(2020, 08, 22), x);
  let date;
  if (newDate.getMonth() < 10) {
    date = "0" + newDate.getMonth();
  }
  return newDate.getDate() + "-" + date + "-" + newDate.getFullYear();
};
