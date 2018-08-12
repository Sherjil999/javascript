//Creating array in different ways

//
//var scores1 = new Array();
//var scores2 = Array(10);
//var scores3 = new Array(9,1,5,8);
//var scores4 = ["red","green",1,false];
//var scores5 = [];

//var names = ["Mike","Smith","John","Tedd"];
//
//console.log(names[0]);
//console.log(names[1]);
//console.log(names[2]);
//console.log(names[3]);
//
//console.log(names[0] + "," + names[1]);

//var myArray = Array(11);
//myArray[0]="jan";
//myArray[1]="feb";
//myArray[2]="march";
//myArray[3]="april";
//myArray[4]="may";
//myArray[5]="june";
//myArray[6]="july";
//myArray[7]="august";
//myArray[8]="september";
//myArray[9]="october";
//myArray[10]="november";
//myArray[11]="december";
//
//var index;
//index = prompt("Enter your month index");
//
//console.log("The month is " + myArray[index]);

//Task
//Create an array that holds the days
//User should be able to enter the day index and output should be:
//          “Today is Monday”

//var days = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
//
//var i  = prompt("Enter your index");
//
//console.log("Today is " + days[i]);
//
//console.log(days.length);

//Task
//Task: Display each array element in the console by using for loop.

//var shoppingList= ["cheese","pumpkin","bread","eggs","melon"];
//
//for(var i=0;i<shoppingList.length;i++){
//    console.log(shoppingList[i]);
//}

/*
Create a car array that holds 6 car names inside
Check if your array has the car name “Honda”
If it is , print “ I found your car Honda in this array”
If it is not, print “ I could not find your car Honda in this array”
*/

//var cars = ["ford","nissan","bmw","ferrari"];
//for(var i=0;i<cars.length;i++){
//    if(cars[i]=="honda"){
//        console.log("found it");
//        break;
//    }else if(i==cars.length-1){
//        console.log("not found it");
//        
//    }
//    
//}

//var bool=false;
//for(var i=0;i<cars.length;i++){
//    if(cars[i]=="honda"){
//        bool=true;
//    }
//}
//
//if(bool==true){
//    console.log("found it")
//}else{
//    console.log("not found it");
//}

/*
Task
Check if shoppingList variable is an Array and if it is, display comma-separated list of elements in the console.
*/

//var cars=3;  //variable
//var cars = ["ford","nissan","bmw","ferrari"];
//
//if(Array.isArray(cars)){
//    console.log(cars.toString());
//}else{
//    console.log("This is not array");
//}


//var stack=[];
//stack.push(1);
//stack.push("apple");
//stack.push(3);
//stack.pop();
////stack.pop();
////stack.pop();
//
//console.log(stack);
//
//for(var i=0;i<stack.length;i++){
//    console.log(stack[i]);
//}

//Write a program  that asks user to enter his/her selection and based on the selection add or remove elements from the array
//Selections 
//          1- Add a new element to the  array
//          2- Remove an element from the array
//          3- Print each element from array
//          4- Exit the program


var stack=[];

do{
    
    var selection=parseInt(prompt("Please select one of them: \n 1-Add a new element to the  array \n 2- Remove an element from the array \n 3- Print each element from array \n 4- Exit the program"));
    if(selection==1){
        debugger;
        var input=prompt("Enter your element");
        stack.push(input);
    }else if(selection==2){
        stack.pop();
    }else if(selection==3){
       // console.log(stack);
        //console.log(stack.toString());
        for(var i=0;i<stack.length;i++){
            console.log(stack[i]);
        }
    }
    
} while(selection !=4)

console.log("Bye");


















