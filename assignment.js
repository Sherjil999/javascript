/*
Question-2
Login Functionality Logic
   UserName,Password
   --- > Program will ask to enter username and password
   --- > If both username and password are blank
       -- > "UserName and Password Fields cannot be empty"
   --- > If userName is blank and password is not blank
       -- > "UserName cannot be empty"
   --- > If userName is not blank and password is blank
       -- > "Password cannot be empty"
   --- > If the username or password is not valid
       -- > "UserName or password is not valid. Please verify"
   --- > If the username and password are both valid
       -- > "User Logged in successfully"

Question-3

Calculator Logic with 2 numbers
    User is able to enter 2 numbers
    User is able to enter one of these operators:
        +,-,/,*
    Program needs to perform the operation and display the result
    If either number1 or number2 is blank:
        "Please enter valid numbers"

 

Question-4

Tax Calculator:

    - Let user enter his income

    - Calculate the tax amount according to below table

    - Print the tax amount

Income	Tax Ratio
income ≤150,000,000	%25
income ≤ 300,000,000	%30
income ≤ 600,000,000	%35
income ≤ 1,200,000,000	%40
income > 1,200,000,000	%50
Sample Output-1

Your Income : 1500

The tax amount you have to pay : 375.0

Sample Output-2

Your Income : 1200000

The tax amount you have to pay : 300000.0

Note: IF Your Income is 200,000,000, your tax will be calculated this way: %25 for 150,000,000 and %30 for the rest of the amount which is 50,000,000
       
Question-5
Any year is input by the user. Write a program to determine whether the year is a leap year or not.
Leap Years are any year that can be evenly divided by 4. A year that is evenly divisible by 100 is a leap year only if it is also evenly divisible by 400.

Example : 
1992      Leap Year
2000      Leap Year
1900      NOT a Leap Year




//Q.1

//if-else if statement

var marks = parseInt(prompt("Enter marks"));

if(marks < 60) {
    console.log("Fail");
} else if(marks >= 60 && marks <90) {
    console.log("Pass");
} else {
    console.log("Passed with Distinction");
}

//if else statement
var marks = parseInt(prompt("Enter marks"));

if(marks < 60) {
    console.log("Fail");
} else {
    if(marks >= 60 && marks <90) {
        console.log("Pass");
    } else {
        console.log("Passed with Distinction");
    }
} 

//if statement

var marks = parseInt(prompt("Enter marks"));

if(marks < 60) {
    console.log("Fail");
}
if(marks >= 60 && marks <90) {
        console.log("Pass");
}
if(marks >= 90) {
    console.log("Passed with Distinction");
}



//Q.2

var UserName, Password, validUsername, validPassword;

validUsername = "Syed999";
validPassword = "Cyberstar123";
UserName = prompt("Please enter your username");
Password = prompt("Please enter your password");

if(UserName==="" && Password==="") {
    console.log("UserName and Password Fields cannot be empty");
} else if(UserName === "") {
    console.log("UserName cannot be empty");
} else if(Password === "") {
    console.log("Password cannot be empty");
} else if((UserName !== validUsername) || (Password !== validPassword)) {
    console.log("UserName or password is not valid. Please verify");
} else {
    console.log("User Logged in successfully");
}

//Q.3

var num1, num2, operator, result;

num1 = prompt("Enter number1");
num2 = prompt("Enter number2");
operator = prompt("Enter an operator(+,-,*,/)");

if(num1 === "" || num2 === "") {
    console.log("Please enter valid numbers");
} else {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    
    switch(operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            result = "You did not enter a valid operator";
}
    
console.log(result);
}

var income, tax, t1, t2, t3, t4;
income = parseInt(prompt("Enter your income"));

t1 = (150000000 * 0.25);
t2 = (150000000 * 0.3);
t3 = (300000000 * 0.35);
t4 = (600000000 * 0.4);

if(income <= 150000000) {
    tax = 0.25 * income;
} else if (income <= 300000000) {
    tax = t1 + (income - 150000000) * 0.3;
} else if (income <= 600000000) {
    tax = t1 + t2 + (income - 300000000) * 0.35;
} else if (income <= 1200000000) {
    tax = t1 + t2 + t3 + (income - 600000000) * 0.4;
} else {
    tax = t1 + t2 + t3 + t4 + (income - 1200000000) * 0.5;
}

console.log("Your income : " + income);
console.log("The tax amount you have to pay : " + tax);


var year = parseInt(prompt("Enter a year"));

if(year % 4 !== 0) {
    console.log("NOT a Leap Year");
} else if(year % 100 !== 0) {
    console.log("Leap Year");
} else if(year % 400 !== 0) {
    console.log("NOT a Leap Year")
} else {
    console.log("Leap Year");
}

Question-6

Telephone Bill
Write a JS program to calculate the monthly telephone bills as per the following rule: 
Minimum $200 for up to 100 calls. 
Plus $0.60 per call for next 50 calls. 
Plus $0.50 per call for next 50 calls. 
Plus $0.40 per call for any call beyond 200 calls.


var phoneBill, numOfCalls;

numOfCalls = 160;

if(numOfCalls < 0) {
    console.log("number of calls can not be less than 0");
} else {
    if(numOfCalls <= 100) {
        phoneBill = 200;
    } else if(numOfCalls <= 150) {
        phoneBill = 200 + (numOfCalls - 100) * 0.6;
    } else if(numOfCalls <= 200) {
        phoneBill = 200 + (50 * 0.6) + (numOfCalls - 150) * 0.5;
    } else {
        phoneBill = 200 + (50 * 0.6) + (50 * 0.5) + (numOfCalls - 200) * 0.4;
    } 
    
    console.log("Your monthly telephone bill is " + phoneBill);
} 



for(var i = 100; i >= 80; i--) {
    if(i % 3 == 0) {
        console.log(i + " is divisible by 3");
    } else {
        console.log(i + " is not divisible by 3");
    }
}



var numOfTimes, num1, num2;

numOfTimes = parseInt(prompt("Enter the number of times you want to repeat the process?"));



for(var i = 0; i < numOfTimes; i++) {
    
    num1 = parseInt(prompt("Enter the first number"));
    num2 = parseInt(prompt("Enter the second number"));
    
    if(num1 > num2) {
        console.log(num1 + " is greater than " + num2);
    } else if(num2 > num1) {
        console.log(num2 + " is greater than " + num1);
    } else {
        console.log("numbers are equal");
    }
}


for(var i=1; i<=32; i++) {
    if(i % 2 == 0) {
        alert(i + " is even");
    } else {
        alert(i + " is odd");
    }
}

var total = 0, number;

for(var i = 0; i < 5; i++) {
    number = parseInt(prompt("Enter a number"));
    total += number;
}

console.log("the total is " + total);

var product;

var number = parseInt(prompt("Enter a positive integer"));

for(var i = 1; i <= 10; i++) {
   if(number >= 0) {
        product = number * i;
        console.log(number + " * " + i + " = " + product);
    }
}


// get number from user and also the power from the user

var number = parseInt(prompt("Please enter your number"));
var power = parseInt(prompt("Please enter the raised power"));
var result = 1;
for(var i = 1; i <= power; i++){
    result = result*number;
}
    console.log(number + " raised to "  + power + " is " + result);


var bool1 = false;
var bool2 = false;
var bool = false;

bool = (bool2 && console.log("1"));
bool = (bool1 || console.log(("2"));
bool = (bool || console.log("3"));

*/

//Q.1

/*
var number = parseInt(prompt("Please enter a number"));
var evenOdd = number % 2;

switch(evenOdd){
    case 0 :
        console.log("EVEN");
        break;
    case 1 :
        console.log("ODD");
        break;
}

/*
//Q.2

var number = parseInt(prompt("Please enter a number"));

switch(number){
    case 0: case 1: case 2:
        console.log("Low Number");
        break;
    case 3: case 4: case 5:
        console.log("Medium Number");
        break;
    default :
        console.log("Other Number");
        break;
}
*/
/*
var discount, pay_amount;
var cost_of_shopping = parseInt(prompt("Please enter total cost of shopping"));

switch(cost_of_shopping){
    case 1000 :
        discount = cost_of_shopping * .05;
        break; 
    case 10000 :
        discount = cost_of_shopping * .08;
        break; 
    default :
        discount = cost_of_shopping * 0;
        break;    
}

pay_amount = cost_of_shopping - discount;
console.log("After discount you need to pay: " + pay_amount);

var number;

number = prompt("Enter number");

number = parseInt(number);

var evenOdd = number % 2;

if(evenOdd === 0) {
    console.log("EVEN");
} else {
    console.log("ODD");
}

if(number == 1 || number == 2 || number == 3) {
    console.log("low number");
} else if(number == 4 || number == 5 || number == 6) {
    console.log("medium number");
} else {
    console.log("other number");
}

switch(number) {
    case 0: case 1: case 2:
        console.log("low number");
        break;
    case 3: case 4: case 5:
        console.log("medium number");
        break;
    default:
        console.log("other number");
        break;
}


    


 var result = (number == 6);

number = "5";
number = 9;
number = ;
typeof number;

var number = 3;



var traffic_Light_Color = prompt("Enter a traffic light color code");

switch(traffic_Light_Color) {
    case "R": case "r":
        console.log("Red");
        break;
     case "O": case "o":
        console.log("Orange");
        break;
    case "G": case "g":
        console.log("Green");
        break;    
}


var number = parseInt(prompt("Please enter a number"));

var sum = 0;
for (var i = 1; i <= number; i++) {
    sum += 1 / i;
}

console.log("the sum of the series is " + sum);


var user_name = prompt("Please enter the user name");
var password = prompt("please enter the password");
var valid_username = "zanab";
var valid_password = "123";

if(user_name == "" && password == ""){
    console.log("user name and password can not be empty")
} else if(user_name == ""){
    console.log("user name can not be empty");
} else if(password == ""){
    console.log("password can not be empty");
} else if(user_name === valid_username && password === valid_password){
    console.log("login successful")
}else {
    console.log("username or the password is invalid");
}



//Question-3

//Calculator Logic with 2 numbers
    //User is able to enter 2 numbers
    //User is able to enter one of these operators:
     //   +,-,/,*
   // Program needs to perform the operation and display the result
    //If either number1 or number2 is blank:
        //"Please enter valid numbers"

var num1 = prompt("please enter a number");
var num2 = prompt("please enter a numerer");
var operator = prompt("please enter the one of the folloeing operator +,-,/,*");
var result;

if (num1 === "" || num2 === ""){
    console.log("Please enter valid number");
} else {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
   switch(operator){
    case "+":
        result = num1+num2;
        break;
    case "-":
        result = num1-num2;
        break;
    case "/":
        result = num1/num2;
        break;
    case "*":
        result = num1*num2;
        break;
    default:
        console.log("please enter the right operator");
}
    console.log(result);
    
}
*/




for(var i=1; i<=7; i++) {
    for(j=1; j<=i; j++) {
        console.log(i);
    }
}
 
for(var i=4; i>=1; i--) {
	var result = "";
    for(var j=i; j>=1; j-- ) {
		result = result + j + " ";
        console.log(j);
    }
    console.log(result);
}

for(var i=1; i<=10; i++) {
    var result = "";
    for(var j=1; j<=10; j++) {
        result = result + i*j + " ";
    }
    console.log(result);
}

for(var i=1; i<=8; i++) {
    var result = "";
    for(var j=1; j<=4; j++) {
        if(i%2==1) {
            result = result + "W " + "B ";
        } else {
            result = result + "B " + "W ";
        }
    }
    console.log(result);
}


var num1 = 1, num2 = 0, temp;
var num = parseInt(prompt("Enter the limit for fibonacci series"));

  while (num > 0){
    temp = num1;
    num1 = num1 + num2;
    num2 = temp;
    num--;
    console.log(num2);  
  }

  



























