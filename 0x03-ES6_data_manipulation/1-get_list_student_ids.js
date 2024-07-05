/***
 * Returns an array of student ids.
 * @param {Array} students - An array of student objects.
 * @returns {Array} - An array of student ids.
 */

function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map((student) => student.id);
}
export getLisStudentIds;
