let students = [
  "shubh",
  "anjali",
  "shivani",
  "shivangi",
  "anupurna",
  "shubham",
  "krishanandu",
  "ravikishan",
  "shivranshu",
  "kaif",
  "arpan",
];

let houses = [];

for (const student of students) {
  if (student.length < 6) {
    houses.push("Gryffindor");
  } else if (student.length < 8) {
    houses.push("Hufflepuff");
  } else if (student.length < 12) {
    houses.push("Ravenclaw");
  } else{
    houses.push("Slytherin");
  }
}
console.log(houses);

// Q2