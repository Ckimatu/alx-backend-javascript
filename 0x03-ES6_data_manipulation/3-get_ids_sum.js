/**
 * returns the sum of all the student ids
 * @param {Array} studentList - list of students
 * @return {Number} - sum of all student ids
 */
export default function getStudentIdsSum(studentList) {
  return studentList.reduce((sum, student) => sum + student.id, 0);
}
