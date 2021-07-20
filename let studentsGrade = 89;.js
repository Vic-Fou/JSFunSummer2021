let studentsGrade = 89;
const getScholarship = "Congratulations! Free ride!!!!";
const tuition = "Please Pay us 50,000";

 const willPersonGetScholarship = studentsGrade>= 85 
    ? 'getScholarship' 
    : 'tuition';

console.log("willPersonGetScholarship");

if (studentsGrade >= 99){
    console.log(getScholarship);
}
else {
    console.log(tuition);
}
console.log(studentsGrade);



