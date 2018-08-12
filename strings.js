//Task 1. Decalre two variables and assign your name and last name. Display in console total number of characters.
/*
var firstName = "Syed";
var lastName = "Haider";
console.log(firstName.length + lastName.length);

var a = "";
var string1 = "";
var string2 = "";
function passwordCreate(string1,string2){
    string1 = prompt("Enter string 1");
    string2 = prompt("Enter string 2");
    
    for (var i = 0; i < string1; i++){
        a = a.concat(string1.charAt(i));
        if( i == 3){
            break;
        }
        
    }
    return a.concat(string2.length);
}


var password = passwordCreate(string1, string2);
console.log(password);


var num1 = prompt("please enter first number");
var num2 = prompt("please enter the second number");

function love6(num1, num2){
    if ((num1 == 6) || (num2 == 6)){
        console.log(true);
    } else if (num1 + num2 == 6){
         console.log(true);

    } else if ((num1 - num2 == 6) || (num2 - num1 == 6)){
         console.log(true);
    } else{
    console.log(false);
    }
}
love6(num1,num2);

//includes() Method

var str = "Hello Mike, welcome to Amazon world.";
var n = str.includes("Mike");
console.log(n);

function checkedString(str1,str2){
    if(str1.includes(str2)){
        console.log(str2.length);
    } else {
        console.log("not found");
    }
}

//indexOf() Method

var str = "Hello Mike, welcome to Amazon world.";
var n = str.indexOf("Mike");
console.log(n);

function checkedString(str1,str2){
    if(str1.includes(str2)){
        console.log(str1.indexOf(str2));
    } else {
        console.log("not found");
    }
}

//replace() Method

var str = "Ebay is a very good website";
var replaced = str.replace("Ebay","Bestbuy");
console.log(replaced);

var str1 = "Mike";
var str2 = "Smith";

var first_two_chars_str1 = str1.charAt(0) + str1.charAt(1);
var last_two_chars_str2 = str2.charAt(str2.length-2) + str2.charAt(str2.length-1);

var replace = str1.replace(first_two_chars_str1, last_two_chars_str2);
                
console.log(replace);

var s1 = "Zanab";
var s2 = "Jaffry";

var x1 =  s2.charAt(0)+s2.charAt(1);
var x2 = s1.charAt(s1.length-2)+s1.charAt(s1.length-1);
var replace = s2.replace(x1, x2);

console.log(replace);

//search() Method

var str = "I want to be number 1 test automation developer.";
console.log(str.search("automation"));
console.log(str.search("1"));

var str = "In order to be a good test developer, I need to practice at least 2 to 3 hours a day."

if(str.search("automation" > 0)) {
    console.log("found");
} else {
    console.log("not found");
}


var str = "In order to be a good test automation developer, I need to practice at least 2 to 3 hours a day."

var indexStart = str.indexOf("automation");
var indexEnd = indexStart + 10;

if(str.slice(indexStart,indexEnd) == "automation") {
    console.log("found");
} else {
    console.log("not found");
}

function firstLast6(array){
    
    if(array[0] == 6 || array[array.length - 1] == 6){
       return true; 
    } else {
        return false;
    }
}

console.log(firstLast6([1,2,6]));
console.log(firstLast6([6,1,2,3]));
console.log(firstLast6([13,6,1,2,3]));

function sameFirstLast(array){
   if(array.length > 1){
        if(array[0] == array[array.length-1]){
        console.log("true");
        }else {
            console.log("false");
        }
   } else{
       console.log("not a valid array");
   }
}
sameFirstLast([1,2,3]);
sameFirstLast([1,2,3,1]);
sameFirstLast([1,2,1]);
sameFirstLast([1]);

function CommonEnd(array1, array2){
    if(array1.length > 1 && array2.length > 1){
        if(array1[0] == array2[0] || array1[array1.length-1] == array2[array2.length-1]){
            console.log("true");
        }else{
            console.log("false");
        }
    } else{
        if(array1.length <= 1){
            console.log("array1 is not a valid array");
        }else if(array2.length <= 1){
            console.log("array2 is not a valid array");
        }
    }
}

CommonEnd([1,2,3],[7,3]);
CommonEnd([1,2,3],[7,3,2]);
CommonEnd([1,2,3],[1,3]);
CommonEnd([1],[7,3]);
CommonEnd([1,2,3],[1]);

function sum(array){
    var total = 0;
    for(var i = 0; i < array.length; i++){
        total += array[i];
    }
    console.log(total);
}
sum([1,2,3]);
sum([5,11,2]);
sum([7,0,0]);
sum([3,-2,10,4]);

//assignment 14 Q.5;

//Write a function that accepts an array and prints an array with the elements "rotated left"
//so [1,2,3] yields [2,3,1]
//Sample Output:
//rotateLeft([1, 2, 3]);  - >[2,3,1]
//rotateLeft([5, 11, 9]); - >[11,9,5]
//rotateLeft([7, 0, 0]); - >[0,0,7]
//rotateLeft([17, 12, 10, 8]); - >[12,10,8,17]

function rotateLeft(array){
    var temp = array[0];
    for(var i = 0; i < array.length; i++){
        array[i] = array[i+1];
    }
    array[array.length-1] = temp;
    console.log(array);
}

rotateLeft([1, 2, 3]); 
rotateLeft([5, 11, 9]);
rotateLeft([7, 0, 0]); 
rotateLeft([17, 12, 10, 8]);

//Question-6
//Write a function that accepts an array and figure out which is greatest element in the array, and set all the other elements to be that value. Print the changed array.
//Sample Output:
//maxEnd([1,2,3]); - > [3,3,3]
//maxEnd([11,5,9]); - > [11,11,11]
//maxEnd([2,11,17]); - > [17,17,17]

function maxEnd(array){
    var max = array[0];
    for (var i = 0; i < array.length; i++){
        if (array[i] > max){
            max = array[i];
        }
    }
    for (var i = 0; i < array.length; i++){
           array[i] = max;
        }
        console.log(array);

}
    
maxEnd([1,2,3]);
maxEnd([11,5,9]);
maxEnd([2,11,17]);

//Question-7
//Write a function that accepts 2 arrays and prints the second array containing the first and last elements from the first array.
//Sample Output:
//makeEnds([1,2,3],[]);  - >[1,3]
//makeEnds([1,2,3,4],[]); - >[1,4]
//makeEnds([7,4,6,2],[]); - >[7,2]

function makeEnds(arr1,arr2){
    arr2.push(arr1[0]);
    arr2.push(arr1[arr1.length-1]);
    console.log(arr2);
}

makeEnds([1,2,3],[]);  
makeEnds([1,2,3,4],[]);
makeEnds([7,4,6,2],[]); 

//Question-8
//Write a function that accepts an array and prints true if it contains a 2 or a 3
//Sample Output:
//has23([2,5]); - >true
//has23([4,3]); - >true
//has23([4,5]); - >false

function has23(array){
    var found2or3=false;
    for (var i=0; i<array.length; i++){
        if(array[i] == 2 || array[i] == 3){
            found2or3=true;
        }
    }
    if (found2or3 == true){
       console.log("true"); 
    }else {
        console.log("false");   
    }
}
has23([2,5]);
has23([4,3]);
has23([4,5]); 
*/

//Question-9
//Write a function that accepts an array and prints a new array with double the length where its last element is the same as the original array, and all the other elements are 0.
//Sample Output:
//makeLast([4, 5, 6]) → [0, 0, 0, 0, 0, 6]
//makeLast([1, 2]) → [0, 0, 0, 2]
//makeLast([3]) → [0, 3]

//function makeLast(arr1){
//    var arr2 = Array(arr1.length * 2);
//    for(var i=0; i<arr2.length; i++){
//        if(i == arr2.length -1){
//            arr2[i] = arr1[arr1.length-1];
//        }else{
//            arr2[i] = 0;
//        }
//    }
//    console.log(arr2);
//}
//makeLast([4, 5, 6])
//makeLast([1, 2])
//makeLast([3])

//function makeLast(arr1){
//    var arr2 = [];
//    var length = 2 * arr1.length;
//    
//    for(var i=0; i< length; i++){
//        
//        if(i == length -1){
//            arr2.push(arr1[arr1.length-1]);
//        }else{
//            arr2.push(0);
//        }
//    }
//    console.log(arr2);
//}
//makeLast([4, 5, 6])
//makeLast([1, 2])
//makeLast([3])

//Question-10
//Write a function that accepts an array and prints true if the array contains 2 twice or 3 twice.
//Sample Output:
//double23([2,2]); - >true
//double23([3,3]); - >true
//double23([2,3]); - >false
//double23([12,20,42]); - >false
//double23([2,2,2]); - >false

//function double23(array){
//    var count2 = 0;
//    var count3 = 0;
//    for(var i=0; i<array.length; i++){
//        if(array[i] == 2){
//            count2++;
//        }
//        if(array[i] ==3){
//        count3++;
//        }
//    }
//    if(count2 == 2 || count3 == 2){
//        console.log("true");
//    }else{
//        console.log("false");
//    }
//}
//
//double23([2,2]);
//double23([3,3]);
//double23([2,3]);
//double23([12,20,42]);
//double23([2,2,2]);


//var str="In 1993, the National Center for Supercomputing Applications (NCSA), a unit of the University of Illinois at Urbana-Champaign, released NCSA Mosaic, the first popular graphical Web browser, which played an important part in expanding the growth of the nascent World Wide Web. In 1994, a company called Mosaic Communications was founded in Mountain View, California and employed many of the original NCSA Mosaic authors to create Mosaic Netscape. However, it intentionally shared no code with NCSA Mosaic. The internal codename for the company's browser was Mozilla, which stood for Mosaic killer, as the company's goal was to displace NCSA Mosaic as the world's number one web browser. The first version of the Web browser, Mosaic Netscape 0.9, was released in late 1994. Within four months it had already taken three-quarters of the browser market and became the main browser for the Internet in the 1990s. To avoid trademark ownership problems with the NCSA, the browser was subsequently renamed Netscape Navigator in the same year, and the company took the name Netscape Communications. Netscape Communications realized that the Web needed to become more dynamic. Marc Andreessen, the founder of the company believed that HTML needed a glue language that was easy to use by Web designers and part-time programmers to assemble components such as images and plugins, where the code could be written directly in the Web page markup";
//
//var counter = 0;
//var arr= str.split(" ");
//
//for(var i=0; i<arr.length; i++){
//    if(arr[i] == "Netscape"){
//        counter++;
//    }
//}


//console.log("Netscape is included " + counter + " times");
//
//
//console.log(arr.length);


//var str = "JavaScript";
//
//console.log(str.substring(str.length-4,2));

//var str = "Javascript";
//
//var newStr = ""
//
//for(var i=0; i< str.length; i++) {
//    if(i == 2 || i == 5) {
//          newStr += str[i].toUpperCase()
//    } else {
//           newStr += str[i];
//    }
//}
//console.log(newStr);

var str = "   342   ";
var newStr = "";
console.log(newStr.concat("|").concat(str.trim().concat("|")));
































 
























































