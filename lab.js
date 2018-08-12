//create 5 variables
/*
var vegetables_1, vegetables_2, vegetables_3, vegetables_4, vegetables_5;

vegetables_1 = "Cucumber";
vegetables_2 = "Tomatoes";
vegetables_3 = "Onion";
vegetables_4 = "Pepper";
vegetables_5 = "Carrot";

console.log("List of vegetables");
console.log(vegetables_1);
console.log(vegetables_2);
console.log(vegetables_3);
console.log(vegetables_4);
console.log(vegetables_5);
           
//create a program that ask user to enter amount for each vegetables and make sure results are number

var amount_cucumber, amount_tomatoes, amount_onion, amount_pepper, amount_carrot;

amount_cucumber = parseInt(prompt("Enter quantity for " + vegetables_1));

amount_tomatoes = parseInt(prompt("Enter quantity for " + vegetables_2));

amount_onion = parseInt(prompt("Enter quantity for " + vegetables_3));


amount_pepper = parseInt(prompt("Enter quantity for " + vegetables_4));

amount_carrot = parseInt(prompt("Enter quantity for " + vegetables_5));

var price_cucumber, price_tomatoes, price_onion, price_pepper, price_carrot;

price_cucumber = 2.5;
price_tomatoes = 3;
price_onion = 1.5;
price_pepper = 2;
price_carrot = 4;

var total_cucumber, total_tomatoes, total_onion, total_peper, total_carrot;

total_cucumber = amount_cucumber * price_cucumber;
total_tomatoes = amount_tomatoes * price_tomatoes;
total_onion = amount_onion * price_onion;
total_peper = amount_pepper * price_pepper;
total_carrot = amount_carrot * price_carrot;


console.log( amount_cucumber + " " +  vegetables_1 + " is " + total_cucumber);

console.log( amount_tomatoes +  " " + vegetables_2 + " is " + total_tomatoes);

console.log( amount_onion +  " " + vegetables_3 + " is " + total_onion);

console.log(amount_pepper +  " " + vegetables_4 + " is " + total_peper);

console.log(amount_carrot + " " + vegetables_5 + " is " + total_carrot);



var firstName, lastName, age;

firstName = prompt("Enter your first name");
lastName = prompt("Enter your last name");
age = parseInt(prompt("Enter your first name"));

console.log("Hi, my name is " + firstName + " " + lastName + ", and my age is " + age + ". Nice to meet you !");
*/
/*
var radius, area, PI = 3.14;

radius = parseInt(prompt("Enter radius"));

area = PI * radius * radius;

console.log("Your circle radius is " + radius + " and the area of the circle is " + area);


var user1_wage, user2_wage, user1_hours, user2_hours , isUser1EarnsMore;

user1_wage = parseInt(prompt("Enter user1 hourly wage"));
user1_hours = parseInt(prompt("Enter user1 hours worked"));
user2_wage = parseInt(prompt("Enter user2 hourly wage"));
user2_hours = parseInt(prompt("Enter user2 hours worked"));

var user1_pay = user1_wage * user1_hours;
var user2_pay = user2_wage * user2_hours;

isUser1EarnsMore = user1_pay > user2_pay;

console.log("user_1 is earning more than user_2 " + isUser1EarnsMore);



//Question-1 

//Write a program to convert gallons into Liters and //display it.

var gal, lit;
gal = 8;

lit = gal * 3.78541;
console.log(lit);

//Question-2  

//Declare a variable MyFruit and assign your favorite fruit into it and display as follows:

            //“My Fav Fruit is My Fruit”

var MyFruit;
MyFruit = "apple";
console.log("My Fav Fruit is " + MyFruit);

//Question-3

//Write a program - > Let user enter his name and birth year, and program will display:

 //    " Hello Ozzy ! Based on your input, your age is 15 :) " 
     
var name, age;
name = prompt("Enter your name");
age = prompt("Enter your age");
console.log(" Hello " + name + " ! Based on your input, your age is " + age);


//Question-4

//How can you find if a number is odd or even in //javascript. Please give an example/write syntax

var number, remainder, even, odd;

number = 9;
even = number % 2 == 0;
odd = number % 2 == 1;

console.log("number " + number + " is even- " + even);
console.log("number " + number + " is odd- " + odd);
*/

var actualUsername, actualPassword;
var expectedUsername = "Syed";
var expectedPassword = "abc123";
var times = 0;

do {
    actualUsername = prompt("Enter username");
    actualPassword = prompt("Enter password");
    
    if(actualUsername != expectedUsername || actualPassword != expectedPassword){
        console.log("Invalid username or password, Please try again");
        times++;
        if (times == 3) {
            console.log("You have entered wrong username or password 3 times. Please try again later");
            break;
        }
    } else {
        console.log("You have successfully logged in");
        break;
    }
} while(true)








            














