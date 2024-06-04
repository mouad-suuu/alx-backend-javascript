const fs = require("fs");

const countStudents = (dataPath) => {
  if (!fs.existsSync(dataPath)) throw new Error("Cannot load the database");
};
module.exports = countStudents;
