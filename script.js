function calculateGrade() {
  let total = 0;

  // Collect marks for 5 subjects
  for (let i = 1; i <= 5; i++) {
    let mark = parseFloat(prompt(`Enter marks for subject ${i}:`));

    // If input is invalid, ask again
    if (isNaN(mark) || mark < 0) {
      alert("Invalid input. Please enter a valid number.");
      i--; // redo this subject
      continue;
    }

    total += mark;
  }

  // Calculate average
  let average = total / 5;
  let grade = "";

  // Grade calculation using if-else
  if (average >= 90) {
    grade = "A+";
  } else if (average >= 80) {
    grade = "A";
  } else if (average >= 70) {
    grade = "B";
  } else if (average >= 60) {
    grade = "C";
  } else if (average >= 50) {
    grade = "D";
  } else {
    grade = "F";
  }

  // Display results
  alert(
    `Total Marks: ${total}\nAverage Marks: ${average.toFixed(2)}\nGrade: ${grade}`
  );
}
