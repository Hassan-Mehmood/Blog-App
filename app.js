// At one college the tuition for full time student in 8000 per semester it has been announced that the tuition will increase by 3% each year for the next 5 years. Write a program with a loop that displays projected semester tuition amount for the next 5 years.

let semester_fee = 8000;

let year = 1;
let semester = 1;
for (let i = 0; i < 5; i++) {
  let increaed_fee = semester_fee * 0.03;
  semester_fee += increaed_fee;

  console.log("Semester", semester, "Fee:", semester_fee);
  semester++;

  console.log("Semester", semester, "Fee:", semester_fee);
  semester++;
  // console.log("Year", year, "Fee:", semester_fee);
}
