//Question-1
//
//Write a function that accepts an array and prints true if the sum of all 2's in the array is exactly 8
// 
//Sample Output:
//sum28([2, 3, 2, 2, 4, 2]); - >true
//sum28([2, 3, 2, 2, 4, 2, 2]); - >false
//sum28([1, 2, 3, 4]); - >false

//function sum28(arr){
//    var sum = 0;
//    for(var i = 0; i < arr.length; i++){
//        if (arr[i] == 2){
//            sum = sum + arr[i];
//        }
//    }
//    if(sum == 8){
//        console.log("true");
//    } else{
//        console.log("false");
//    }
//}
//        
//sum28([2, 3, 2, 2, 4, 2]);
//sum28([2, 3, 2, 2, 4, 2, 2]);
//sum28([1, 2, 3, 4]); 

//Question-2
//Write a function that accepts an array and prints true if the number 1's is gretaer than the number 4's
// 
//Sample Output:
//more14([1, 4, 1]); ->true
//more14([1, 4, 1, 4]); ->false
//more14([1, 1]); ->true

//function more14(arr){
//    var counter1 = 0;
//    var counter4 = 0;
//    for(var i = 0; i < arr.length; i++){
//        if(arr[i] == 1){
//            counter1++;
//        }else if(arr[i] == 4){
//            counter4++;
//        }
//    }
//    if(counter1 > counter4){
//        console.log("true");
//    }else {
//        console.log("false");
//    }
//}
//
//more14([1, 4, 1]);
//more14([1, 4, 1, 4]); 
//more14([1, 1]); 

//Write a function that acccepts a number and create and prints a new array of length number, containing the numbers 0,1,2,...number-1.
// 
//Sample Output:
//fizzArray(4) → [0, 1, 2, 3]
//fizzArray(1) → [0]
//fizzArray(10) →[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//function fizzArray(num){
//    var arr=Array(num);
//    for(var i =0; i < arr.length; i++){
//       arr[i] = i; 
//    }
//    console.log(arr);
//}
//
//fizzArray(4) //[0, 1, 2, 3]
//fizzArray(1) // [0]
//fizzArray(10) //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//Question-4
//A value is "everywhere" in an array if for every pair of adjacent elements in the array, at least one of the pair is that value. 
//Write a function that accepts an array and a number, and prints true if the given number is everywhere in the array.
// 
//Sample Output:
//isEveryWhere([1, 2, 1, 3], 1); - >true
//isEveryWhere([1, 2, 1, 3], 2); - >false
//isEveryWhere([1, 2, 1, 3, 4], 1); - >true
//isEveryWhere([1, 2, 4, 3, 1], 1); - >false


//function isEveryWhere(arr, num){
//    var is_everyWhere = false;
//    
//    for(var i=0; i<arr.length; i++){
//        
//       if(arr[i] == num && (arr[i+1]==num || arr[i+2]== num)){
//           is_everyWhere = true;
//           break;
//           
//       }
//    }
//    
//    if(is_everyWhere) {
//        console.log("true");    
//    } else {
//        console.log("false");  
//    }  
//      
//}
//
//    
//
//isEveryWhere([1, 2, 1, 3], 1); //true
//isEveryWhere([1, 2, 1, 3], 2); //false
//isEveryWhere([1, 2, 1, 3, 4], 1); //true
//isEveryWhere([1, 2, 4, 3, 1], 1); //false

//Write a function that accepts two arrays of the same length. For every element in array1, consider the corresponding element in array2 (at the same index). Return the count of the number of times that two elements differ by 2 or less, but are not equal.
// 
//Sample Output:
//matchUp([1, 2, 3], [2, 3, 10]); ->2
//matchUp([1, 2, 3], [2, 3, 5]); ->3
//matchUp([1, 2, 3], [2, 3, 3]); ->2

//function matchUp(arr1, arr2){
//    var counter = 0;
//    for(var i=0; i<arr1.length; i++){
//        if(arr2[i] - arr1[i] ==1 || arr2[i] - arr1[i] == 2){
//            counter++;
//        }
//    }
//    console.log(counter);
//} 
//
//matchUp([1, 2, 3], [2, 3, 10]); //2
//matchUp([1, 2, 3], [2, 3, 5]); //3
//matchUp([1, 2, 3], [2, 3, 3]); //2

//Question-6
//Write a function that accepts an array and prints true if the array contains 3 even or 3 odd values all next to each other.
// 
//Sample Output:
//modThree([2, 1, 3, 5]); ->true
//modThree([2, 1, 2, 5]); ->false
//modThree([2, 4, 2, 5]); ->true

//function modThree(arr){
//    is3EvenOdd = false;
//    
//    for(var i=0; i<arr.length; i++){
//        if((arr[i]%2==0 && arr[i+1]%2==0 && arr[i+2]%2==0) || (arr[i]%2==1 && arr[i+1]%2==1 && arr[i+2]%2==1)){
//            is3EvenOdd = true;
//        }
//    }
//    
//    if(is3EvenOdd) {
//        console.log("true");
//    } else {
//        console.log("false");
//    }
//}
//
//
//modThree([2, 1, 3, 5]); //true
//modThree([2, 1, 2, 5]); //false
//modThree([2, 4, 2, 5]); //true


//Question-7
//Write a function that accepts an array and prints true if the array contains,somewhere,three increasing adjacent numbers like 4,5,6,... or 23,24,25.
// 
//Sample Output:
//tripleUp([1, 4, 5, 6, 2]); ->true
//tripleUp([1, 2, 3]); ->true
//tripleUp([1, 2, 4]); ->false
//tripleUp([1, 2, 4, 5, 8, 9]); ->false

//function tripleUp(arr){
//    var isTriple = false;
//    
//    for(var i=0; i<arr.length; i++){
//        if(arr[i+1] == arr[i] + 1 && arr[i+2] == arr[i+1] + 1){
//            isTriple = true;
//            break;
//        }    
//    }
//    
//    if(isTriple){
//        console.log('true');
//    } else {
//        console.log('false');
//    }
//}
//
//tripleUp([1, 4, 5, 6, 2]); //true
//tripleUp([1, 2, 3]); //true
//tripleUp([1, 2, 4]); //false
//tripleUp([1, 2, 4, 5, 8, 9]); //false

//Question-8
//Write a function that accepts start and end numbers. 
//Given start and end numbers, return a new array containing the sequence of integers from start up to but not including end, so start=5 and end=10 yields [5, 6, 7, 8, 9].
// 
//Sample Output:

//function fizzArray3(start,end){
//    var arr = [];
//    
//    for(var i = start; i<end; i++){
//        arr.push(i);
//    }
//    
//    console.log(arr);
//}
//
//fizzArray3(5, 10) //[5, 6, 7, 8, 9]
//fizzArray3(11, 18) // [11, 12, 13, 14, 15, 16, 17]
//fizzArray3(1, 3) //[1, 2]

//==============================================================================================
//Question-9
//Write a function that accepts an array. For each multiple of 10 in the given array, change all the values following it to be that multiple of 10, until encountering another multiple of 10.
// 
//Sample Output:
//tenRun([2, 10, 3, 4, 20, 5]) → [2, 10, 10, 10, 20, 20]
//tenRun([10, 1, 20, 2]) → [10, 10, 20, 20]
//tenRun([10, 1, 9, 20]) → [10, 10, 10, 20]

//function tenRun(arr){
//    var multipleTen;
//    var foundMultipleTen = false;
//                        
//    for(var i = 0; i < arr.length; i++){
//
//        if(arr[i] % 10 == 0){
//            multipleTen = arr[i];
//            foundMultipleTen = true;
//        } 
//
//        if(foundMultipleTen){
//            arr[i] = multipleTen;    
//        }
//    }
//
//    console.log(arr);
//}
//
//tenRun([2, 10, 3, 4, 20, 5]) //[2, 10, 10, 10, 20, 20]
//tenRun([10, 1, 20, 2]) //[10, 10, 20, 20]
//tenRun([10, 1, 9, 20])// [10, 10, 10, 20]

//==============================================================================================
//Question-10
//It is said that an element in array is alone if there are values before and after it, and those values are different from it. Write a function that accepts an array and a number and prints the given array where every instance of the given value which is alone is replaced by whichever value to its left or rigth is larger.
// 
//Sample Output:
//notAlone([1, 2, 3], 2) → [1, 3, 3]
//notAlone([1, 2, 3, 2, 5, 2], 2) → [1, 3, 3, 5, 5, 2]
//notAlone([3, 4], 3) → [3, 4]

function notAlone(arr, element){
    for(var i=1; i<arr.length-1; i++){
        
    }
}
























