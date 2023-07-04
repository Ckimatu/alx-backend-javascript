/**
 * retrieves ids from list of students
 * @param {Object[]} studentList - An array of student objects.
 * @returns {Number[]} - An array of student IDs.
 * If the input is not an array, an empty array is returned.
 */
export default function getListStudentIds(studentList) {
  if (!Array.isArray(studentList)) {
    return [];
  }
  return studentList.map((student) => student.id);
}
