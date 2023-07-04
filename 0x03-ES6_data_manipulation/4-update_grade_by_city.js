/**
 * returns array of students for specific city with new grade
 * @param {list} studentList - list of students
 * @param {String} city - the city
 * @param {Array} newGrades - grades
 * @returns {Object[]} - array of updated students with grades
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (students instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || defaultGrade).grade,
      }));
  }
  return [];
}
