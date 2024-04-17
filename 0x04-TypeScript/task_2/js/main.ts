export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Sample data for students
const studentA: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const studentB: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 22,
  location: "Los Angeles",
};

const studentsList: Array<Student> = [studentA, studentB];

export const displayStudents = (students: Array<Student>): void => {
  const table = document.createElement("table");
  const tableHead = document.createElement("thead");
  const headRow = document.createElement("tr");
  const tableBody = document.createElement("tbody");

  // Fixed closing tags
  headRow.insertAdjacentHTML("beforeend", "<td>FirstName</td>");
  headRow.insertAdjacentHTML("beforeend", "<td>Location</td>");
  tableHead.appendChild(headRow); // Better to use appendChild here for consistency

  students.forEach((student) => {
    const bodyRow = document.createElement("tr");
    bodyRow.insertAdjacentHTML("beforeend", `<td>${student.firstName}</td>`);
    bodyRow.insertAdjacentHTML("beforeend", `<td>${student.location}</td>`);
    tableBody.appendChild(bodyRow); // Using appendChild for consistency
  });

  table.appendChild(tableHead);
  table.appendChild(tableBody);
  document.body.appendChild(table);
};

displayStudents(studentsList);
document.title = "Task 0"; // Set the document title

// Optional: Apply some basic styles via JavaScript
const styleSheetElement = document.createElement("style");
styleSheetElement.textContent = `
  table {
    width: 100%;
    border-collapse: collapse;
  }
  td, th {
    border: 1px solid #ddd;
    padding: 8px;
  }
  tr:nth-child(even){background-color: #f2f2f2;}
`;
document.head.appendChild(styleSheetElement);
