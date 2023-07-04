/**
 * returns array of students for specific city with new grade
 * @param {list} studentList - list of students
 * @param {String} city - the city
 * @param {Array} newGrades - grades
 * @returns {Object[]} - array of updated students with grades
 */
export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      const grade = gradeObj ? gradeObj.grade : 'N/A';
      return { ...student, grade };
    });
}
