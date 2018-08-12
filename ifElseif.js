/*
1-Monday
2-Tuesday
3-Wednesday
4-Thursday
5-Friday
6-Saturday
7-Sunday


var day = parseInt(prompt("Enter your number"));

if (day == 1){
    console.log("Today is Monday");
} else if( day == 2){
    console.log("Today is Tuesday");
}else if( day == 3){
    console.log("Today is Wednesday");
}else if( day == 4){
    console.log("Today is Thursday");
}else if( day == 5){
    console.log("Today is Friday");
}else if( day == 6){
    console.log("Today is Saturday");
}else if( day == 7){
    console.log("Today is Sunday");
}else{
    console.log("not a valid day");
}


var myFruit;

myFruit = prompt("Enter your favorite fruit");
console.log("My Fav Fruit is " + myFruit);


var marks_subject1, marks_subject2, marks_subject3, sum, grade, average;

marks_subject1 = parseInt(prompt("Enter marks for subject1"));
marks_subject2 = parseInt(prompt("Enter marks for subject2"));
marks_subject3 = parseInt(prompt("Enter marks for subject3"));

sum = marks_subject1 + marks_subject2 + marks_subject3;
average = sum / 3;

if((marks_subject1 < 0 || marks_subject1 >100) || (marks_subject2 < 0 || marks_subject2 >100) || (marks_subject3 < 0 || marks_subject3 >100)) {
    console.log("Please enter valid marks");
} else {
    if( average >=0 && average <= 59) {
    grade = "F";
    } else if( average >=60 && average <= 69) {
    grade = "D";
    } else if( average >=70 && average <= 79) {
    grade = "C";
    } else if( average >=80 && average <= 89) {
    grade = "B";
    } else if( average >=90 && average <= 100) {
    grade = "A";
    } 
    
    console.log("Your grade is " + grade);
}
*/

var sub1, sub2, sub3, sum, average, grade;

sub1 = parseInt(prompt("Please enter your marks for first subject"));
sub2 = parseInt(prompt("Please enter your marks for second subject"));
sub3 = parseInt(prompt("Please enter your marks for third subject "));

sum = sub1 + sub2 + sub3;
average = sum/3;

if ((sub1 >=0 && sub1 <= 100) && (sub2 >= 0 && sub2 <= 100) && (sub3 >= 0 && sub3 <= 100)){
    //console.log("You entered valid marks");
    if(average >= 90 && average <= 100){
    grade = "A";
    }else if(average >=80 && average <= 89){
    grade = "B";
    }else if(average >=70 && average <= 79){
    grade = "C";
    }else if(average >=60 && average <= 69){
    grade = "D";
    }else if(average >=0 && average <= 59){
    grade = "F";
    }
    console.log("your garde is " + grade);
} else{
    console.log("Please enter valid marks");
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    