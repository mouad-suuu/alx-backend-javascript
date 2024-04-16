export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce((acc, student) => acc + student.id, 0);
  }
  return 0;
}
