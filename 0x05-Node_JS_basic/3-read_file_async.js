const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf-8')
    .then((data) => {
      // If the file is empty or has invalid content, throw an error
      if (!data) throw new Error('Cannot load the database');

      // Split the data by lines and filter out any empty lines
      const lines = data.trim().split('\n').filter((line) => line);

      // Removing the first line (header) for processing
      const headers = lines[0].split(',');
      const studentData = lines.slice(1);

      const students = {};

      // Processing each student's data
      studentData.forEach((line) => {
        const [firstname, lastname, age, field] = line.split(',');

        if (!students[field]) {
          students[field] = [];
        }

        students[field].push(firstname);
      });

      // Log total number of students
      const totalStudents = Object.values(students).reduce((sum, field) => sum + field.length, 0);
      console.log(`Number of students: ${totalStudents}`);

      // Log number of students in each field and list their names
      for (const field in students) {
        const names = students[field].join(', ');
        console.log(`Number of students in ${field}: ${students[field].length}. List: ${names}`);
      }
    })
    .catch((error) => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
