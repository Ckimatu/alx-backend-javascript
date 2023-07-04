/**
 * retrieves list of students located in city
 * @param {Array} students - list of students
 * @param {string} city - city to filter the students by.
 * @returns {Array} - Array of students located in the city.
 */
export default function getStudentsByLocation(students, city) {
	if (students instanceof Array) {
		return students.filter((student) => student.location === city);
	}
	return [];
}
