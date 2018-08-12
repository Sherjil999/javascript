/*
var scores = new Array();
console.log(scores);

var scores = Array(10);
console.log(scores);

var scores = new Array(9, 1, 5, 8);
console.log(scores);

var scores = ["red", "green", 1, false];
console.log(scores);

var scores = [];
console.log(scores);


var monthIndex = parseInt(prompt("Enter the number for month"));
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log("The month name is " + months[monthIndex-1]);

var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var dayIndex = parseInt(prompt("Enter day Index"));
console.log("Today is " + daysOfWeek[dayIndex]);

var shoppingList = ["cheese", "pumpkin", "bread", "eggs", "milk", "almonds"];

for(var i=0; i<shoppingList.length; i++) {
    console.log(shoppingList[i]);
}


var cars = ["Nissan", "Dodge", "Ford", "Infinitii", "BMW"];
var found = false;

for(var i=0; i<cars.length; i++){
    if(cars[i] == "Honda"){
        found = true;
    }
}

if(found == true){
    console.log("I found your car Honda in this array");
}else {
    console.log("I not found your car Honda in this array");
}



var cars = ["Honda"];
console.log(Array.isArray(cars));
console.log(cars.toString());

var shoppingList = ["cheese", "pumpkin", "bread", "eggs", "milk", "almonds"];

var result = "";
if(Array.isArray(shoppingList)) {
    for(var i=0; i<shoppingList.length; i++) {
        result += shoppingList[i] + ","
    }
    console.log(result);
    console.log(shoppingList.toString());
} else {
    console.log("It is not an array");
}

var arr = [], selection, element;

do {
    var selection = parseInt(prompt("Enter you selection"));
    
    if(selection == 1) {
        element = prompt("Enter the element to add to the array");
        arr.push(element);
    } else if(selection == 2) {
        if(arr.length > 0) {
            arr.pop();
        } else {
            console.log("Array is empty");
        }
    } else if(selection == 3){
        for(var i=0; i< arr.length; i++) {
            console.log(arr[i]);
        }
    } else {
			console.log("Enter a vaild option");
	    }
		
    
    
} while(selection != 4);


var num1, num2, num3, max, response, counter=0;

do {
    num1 = parseInt(prompt("Enter a number1"));
    num2 = parseInt(prompt("Enter a number2"));
    num3 = parseInt(prompt("Enter a number3"));

    if((num1 == num2) && (num1 == num3)) {
        alert("numbers are eqaul");
    } else {
        max = num1;
        if(num2 > max) {
            max = num2;
        }
        if(num3 > max) {
            max = num3;
        }
        alert(max + " is the largest number");
    }
    counter++;
    response = parseInt(prompt("Do you want to contiue? 1.Yes 2.No"));
    if(response == 2) {
        console.log("Thank you! you have tried " + counter + " times");
        break;
    }
} while(true);

var result="",i=1,j=parseInt(prompt("Enter the end"));

while(i<=j){
	if(i%2==1){
        if(i==j || i==j-1){
            result += i;
        } else{
            result += i + ",";
        }
	}
    i++;
}
console.log(result);



var myFish = ["angel", "clown", "mandarin", "surgean"];
console.log(myFish);

var shifted = myFish.shift();
console.log(shifted);

for(var i=0; i< myFish.length; i++) {
    console.log(myFish[i]);
}

myFish.unshift("angel");
console.log(myFish);

for(var i=0; i< myFish.length; i++) {
    console.log(myFish[i]);
}

var names = ["Andrew", "Edward", "Paul", "Chris", "John"];

while(names.length !=0) {
    names.shift();
}

var myFish = ["angel", "clown", "mandarin", "surgean"];

myFish.splice(2,0,"drum");
console.log(myFish);

myFish.splice(3,1);
console.log(myFish);

myFish.splice(2,1,"trumpet");
console.log(myFish);

myFish.splice(0,2,"parrot", "anemone","blue");
console.log(myFish);

myFish.splice(2,2);
console.log(myFish);

myFish.splice(1,1);
console.log(myFish);


var myFish = ["angel", "clown", "mandarin", "sturgeon"];

myFish.splice(2,0, "drum");
console.log(myFish);

myFish.splice(3,1);
console.log(myFish);

myFish.splice(2,1, "trumpet");
console.log(myFish);

myFish.splice(0,2, "parrort", "anemone", "Blue");
console.log(myFish);

myFish.splice(2,2);
console.log(myFish);

myFish.splice(1,1);
console.log(myFish);

var animals = ["dog", "cat", "monkey", "donkey", "dino", "elephant"];
console.log(animals.slice(0));

console.log(animals.slice(1));

console.log(animals.slice(5));

console.log(animals.slice(4));

console.log(animals.slice(0,1));

console.log(animals.slice(0,2));

console.log(animals.slice(0,0));

console.log(animals.slice(2,3));

console.log(animals.slice(2,5));


var animals = ["dog", "cat", "monkey", "donkey", "dino", "elephant", "dog"];

console.log(animals.lastIndexOf("dog"));

var beasts = ["ant", "bison", "camel", "duck", "bison"];
console.log(beasts.indexOf("bison"));
console.log(beasts.indexOf("bison",2));
console.log(beasts.indexOf("giraffe"));
console.log(beasts.indexOf("camel",-3));

var scores = [10, 20, 30, 10, 40, 20,10];

console.log(scores.lastIndexOf(10));
console.log(scores.lastIndexOf(20));
console.log(scores.lastIndexOf(50));

var numbers = [2, 5, 9, 2];

console.log(numbers.lastIndexOf(2));//3
console.log(numbers.lastIndexOf(7));//-1
console.log(numbers.lastIndexOf(2, 3));//3
console.log(numbers.lastIndexOf(2, 2));//0
console.log(numbers.lastIndexOf(2, -2));//0
console.log(numbers.lastIndexOf(2, -1));//3


var months = ["March","Jan","Feb","Dec"];
months.sort();
console.log(months);

var array1 = [1,30,4,21];
array1.sort();
console.log(array1);

var animals = ["Cat", "ant", "Bee","elephant", "Ant"];
animals.sort();
console.log(animals);

var mixArray = ["cat", "Ant", 3, "elephant","Bee",67];
mixArray.sort();
console.log(mixArray);

var Arraynumber = Array(10);

var num; sum = 0;

for(i=0; i<10; i++){
    num = parseInt(prompt("Enter number " + (i+1)));
    Arraynumber[i] = num;
    sum = sum + Arraynumber[i];
}
console.log(sum);

var indices = [];
var array = ["a", "b", "a", "c", "a", "d"];
var elements = [];

for(var j = 0; j < array.length; j++){
    
    if(!elements.includes(array[j])){
        elements.push(array[j]);
        
        for(var i = 0; i<array.length; i++){
            if(array[i] == array[j]){
                indices.push(i);
           } 
        }
        console.log(indices);
        indices = [];
    }
    
}

var indices=[];
var array=["a","b","a","c","a","d"];

for(var j=0;j<array.length;j++){
    for(i=0;i<array.length;i++){
        switch(array[j]){
            case array[i]:
            indices.push(array.indexOf(array[i],i));
            break;    
        }
    }
     console.log(indices); 
    indices = [];
}

var myArray = [
    ["x","y","z"],
    ["a","b","c"],
    ["Work",9],
    ["Eat",2],
    ["Play Games",3]
];

for(var i=0; i<myArray.length;i++){
    for(var j=0; j<myArray[i].length;j++){
        console.log(myArray[i][j]);
    }
}
//myArray[0]=["x","y","z"];

//var apples = 10;

for(var apple = 10; apple > 0 ; apple--){
    console.log("I have " + apple + " apple left");
    console.log("Eating an apple");
}
console.log("no more apples");

var number = parseInt(prompt("Please enter a number"));
var counter = 1;

while(counter <= number){
    if(counter%2 == 0){
        console.log(counter);
        }
    counter++;
}

var num = 100;
var counter = 0;
var evenSum = 0, oddSum = 0;

while(counter <= num){
    if(counter%2 == 0){
      evenSum += counter; 
    }else {
        oddSum += counter;
    }
    
    counter++;
}
console.log("even number sum is " + evenSum);
console.log("odd numbers sum is " + oddSum);
*/

var num;
var sum = 0;

do {
    for(var i = 1; i <= 5; i++){
    num = parseInt(prompt("Please enter the number" + i));
    sum += num;
    
    }
    console.log(sum);
    var confirm = prompt("Do you want to continue?\nYes.1 No.2");
}while (confirm == 1)





















































































