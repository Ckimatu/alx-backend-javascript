/**
 * retrieves list of students located in city
 * @param {Array} studentList - list of students
 * @param {string} city - city to filter the students by.
 * @returns {Array} - Array of students located in the city.
 */
export default function getStudentsByLocation(studentList, city) {
  return studentList.filter((student) => student.location === city);
}
