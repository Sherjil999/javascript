/*
var num1 = 8;
var num2 = 3;
var num3 = 1;
var sum;
function calculateSum() {
    sum = num1 + num2 + num3;
    console.log(sum);
}

calculateSum();


function convertKM() {
    var miles = 30;
    var km = miles * 1.6;
    return km;
}
var kilometers 
console.log(convertKM());


function FindGreaterNumber() {
    var num1 = parseInt(prompt("Enter number1"));
    var num2 = parseInt(prompt("Enter number2"));
    
    if(num1 > num2) {
        console.log(num1 + " is greater than " + num2);
    } else if( num2 > num1){
         console.log(num2 + " is less than " + num1);
    } else {
         console.log("numbers are equal");
    }
}

function calculatePay(hours, rate){
    console.log("Your pay is " + hours*rate);
}

calculatePay(40, 9);
calculatePay(32, 10);
calculatePay(50, 12);

//calculate salary

function salary(hours,rate){
    
    var pay = hours*rate;
    console.log("your salay is " + pay);
}
salary(4,10);
salary(40,13);

var options;
var shoppingList = ["Orange","Apple"];

do {
    options = prompt("1-Add a product\n2-Remove a product\n3-Edit a product\n4-Print the shopping list\n5-Exit the program")
    
    if(options == 1){
        var itemToAdd = prompt("Currently you have: " + shoppingList.toString() + "\nWhat do you want to add?");
        
        shoppingList.push(itemToAdd);
        alert("Currently you have: " + shoppingList);
    } else if(options == 2){
        var itemToDel = prompt("Currently you have: " + shoppingList + "\nWhat do you want to remove?");
        var removed = false;
        
        for(var i=0; i<shoppingList.length; i++){
            if(itemToDel == shoppingList[i]){
                removed = true;
                shoppingList.splice(i,1);
            }
        }

        if(removed){
            alert(itemToDel + " successfully removed\n" + shoppingList);
        } else {
            alert(itemToDel + " could not be found");
        }
    } else if(options == 3){
        var itemToDel = prompt("Currently you have: " + shoppingList + "\nEnter what do you want to change?");
        var itemToAdd = prompt("What is the new product that you want to enter?");
        var changed = false;

        for(var i=0; i<shoppingList.length; i++){
            if(itemToDel == shoppingList[i]){
                shoppingList.splice(i,1,itemToAdd);
                changed = true;
            }
        }

        if(changed){
            alert(itemToDel + " successfully changed\n" + shoppingList);
        } else {
            alert(itemToDel + " could not be found");
        }
    } else if(options == 4){
        for(var i=0; i<shoppingList.length; i++){
            alert((i+1)+ "-" + shoppingList[i]);
        }
    }
    
    
    
} while(options !=5);

alert("Thank you");



function calculator(num1, num2, operator){
    switch(operator){
        case "+":
            console.log(num1 + num2);
            break;
        case "-":
            console.log(num1 - num2);
            break;
        case "/":
            console.log(num1 / num2);
            break;
        case "*":
            console.log(num1 * num2);
            break;
        default:
            console.log("Enter a valid operator");
    }
}


calculator(2,3,"+");


birthYear = 1974;

function calculateAge(currentYear,birthYear) {
    var age = currentYear - birthYear;
    console.log("Your birth year is " + birthYear + " and you are " + age + " years old");
}

calculateAge(2018,1974);
calculateAge(1998);
calculateAge(2000);

function findGreatestNumber(num1, num2, num3){
    var max = num1;
    if(num2 > max) {
        max = num2;
    } 
    if(num3 > max){
        max = num3;
    }
    console.log("The greatest number is " + max);
}

findGreatestNumber(2,4,3);


function calculateCelcius(fahrenheit){
    var celcius = (fahrenheit-32)*5/9;
    console.log(celcius);
}

calculateCelcius(50);
calculateCelcius(60);
calculateCelcius(32);


function calculateGrade(score1, score2, score3){
    var grade;
    var average = (score1 + score2 + score3)/3;
    if(average >=90 && average <= 100){
        grade = "A";
    } else if(average >=80 && average < 90){
        grade = "B";
    } else if(average >=70 && average < 80){
        grade = "C";
    } else if(average >=60 && average < 70){
        grade = "D";
    } else if(average >=0 && average < 60){
        grade = "F";
    } else {
        console.log("Please enter valid scores");
    }
    console.log("Your grade is " + grade);
}

calculateGrade(45,60,100);
calculateGrade(78,60,90);
calculateGrade(90,98,100);
*/

function findElement(myArray,element) {
    var found = false;
    for(var i=0; i<myArray.length; i++){
        if(myArray[i] == element){
            found = true;
        }
    }
    if(found){
        console.log("found it");
    } else {
        myArray.push(element);
        for(var i=0; i<myArray.length; i++){
            console.log(myArray[i]);
        }
    }
        
    }
findElement(["apple", "orange"], "orange");



