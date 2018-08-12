/*
var sumEven = 0;
var sumOdd = 0;
var count = 0;
while(count <= 100){
    if(count%2 == 0){
        sumEven += count;
    } else {
        sumOdd += count;
    }
    
    count++;
} 
console.log(" Sum of even numbers is " + sumEven);
console.log(" Sum of odd numbers is " + sumOdd);

var username, password, expected_username, expect_password;

expected_name = "Syed";
expect_password = "123";

do {
    username = prompt("Enter username");
    password = prompt("Enter username");
} while( username !== expected_username || password !== expect_password);    

    console.log("login successful");

var number;
var secretNumber = 8;

  number = parseInt(prompt("Enter a number between 1-20"));
 
while(number !== secretNumber) {
    if(number > secretNumber) {
        console.log("Too large");
    } else {
        console.log("Too small");
    }
    
    number = parseInt(prompt("Enter a number between 1-20"));
}

console.log("Congrat, you got it");

*/

var username, password, expected_username, expected_password, password_tries;

password_tries = 3;
expected_username = "Syed";
expected_password = "123";


username = prompt("Enter username");
password = prompt("Enter password");

while(username !== expected_username || password !== expected_password) {
    
    password_tries--;
    
    if(password_tries === 0) {
        console.log("Number of tries exceeded");
        break;
    }
    
    username = prompt("Enter username");
    password = prompt("Enter password");
   
}     
    if(password_tries !== 0) {
        console.log("login successful");
    }
    














