import readDatabase from "../utils";

export default class StudentsController {
  static async getAllStudents(req, res) {
    const databasePath = process.argv[2];

    try {
      const fields = await readDatabase(databasePath);
      let response = "This is the list of our students\n";

      const sortedFields = Object.keys(fields).sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
      );

      sortedFields.forEach((field) => {
        const count = fields[field].length;
        const list = fields[field].join(", ");
        response += `Number of students in ${field}: ${count}. List: ${list}\n`;
      });

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send("Cannot load the database");
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const databasePath = process.argv[2];
    const { major } = req.params;

    if (major !== "CS" && major !== "SWE") {
      res.status(500).send("Major parameter must be CS or SWE");
      return;
    }

    try {
      const fields = await readDatabase(databasePath);
      const students = fields[major];

      if (students) {
        res.status(200).send(`List: ${students.join(", ")}`);
      } else {
        res.status(200).send("List: ");
      }
    } catch (error) {
      res.status(500).send("Cannot load the database");
    }
  }
}
