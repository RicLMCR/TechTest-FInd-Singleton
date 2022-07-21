//A class of students have a project to work on in pairs. Everyone in the class found a partner, apart from one student.
// Using the list provided (which details every student in the class represented by the number of their team), find the student with no partner.

// Note that the number of teams can represent either: only two students or the single student.
// Try to find the most efficient solution!

let students = [53491,62276,82233,66051,97664,27657,45882,46503,27064,64689,70329,62843,84840,53491,62276,82233,66051,97664,27657,45882,46503,27064,64689,70329,62843,84840,1337];
let remStudents=[];

const singleton=()=>{

    for (let i =0; i<students.length; i++){
        console.log("I is:", i, "and the student number is", students[i]);
        for (let j = 0; j<students.length; j++){
            if (i!==j){
                console.log("J is:", j, "and the student number is", students[j]);
                if (students[i]===students[j]){
                    remStudents.push(students[i], students[j])
                    console.log("remStudents is:", remStudents);
                }
            }
        }   
    } students = students.filter(item => !remStudents.includes(item));
    single_student_number = students.toString();
      console.log("single student is:", single_student_number);
      return(single_student_number)
}


singleton();