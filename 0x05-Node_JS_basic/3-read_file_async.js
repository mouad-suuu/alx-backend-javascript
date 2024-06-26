const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data
        .trim()
        .split('\n')
        .filter((line) => line.length > 0);

      if (lines.length <= 1) {
        reject(new Error('No data available in the file'));
        return;
      }

      const students = lines.slice(1);
      const totalStudents = students.length;
      const fields = {};

      students.forEach((student) => {
        const details = student.split(',');
        const field = details[details.length - 1].trim();
        const firstName = details[0].trim();

        if (!fields[field]) {
          fields[field] = [];
        }

        fields[field].push(firstName);
      });

      console.log(`Number of students: ${totalStudents}`);
      for (const [field, names] of Object.entries(fields)) {
        console.log(
          `Number of students in ${field}: ${names.length}. List: ${names.join(
            ', ',
          )}`,
        );
      }

      resolve();
    });
  });
}

module.exports = countStudents;
