Question-1
Write a function that accepts an array, and if there is a 2 in the array immediately followed by a 3, set the 3 element to 0. Print the changed Array
Sample Output:
fix23([1,2,3]); - > [1,2,0]
fix23([2,0,5]); - > [2,0,5]
fix23([1,2,1]); - > [1,2,1]
fix23([11,2,13,3,2]); - >[11,2,13,3,2]


function fix23(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i] == 2 && arr[i+1] == 3){
            arr[i+1] = 0;
        }
    }
    
    console.log(arr);
}

fix23([1,2,3]); //[1,2,0]
fix23([2,0,5]); // [2,0,5]
fix23([1,2,1]); // [1,2,1]
fix23([11,2,13,3,2]); //[11,2,13,3,2]

Question-2
Write a function that accepts two arrays and prints how many of the arrays have 1 as their first Element
Sample Output:
start1([1,2,3],[1,3]); - >2
start1([7,2,3],[1]); - >1
start1([1,2],[]); - >1
start1([3,2,4],[4,3,4]); - >0


function start1(arr1,arr2){
    counter1=0
    
    if(arr1[0] == 1){
        counter1++;
    }
    
    if(arr2[0] == 1){
        counter1++;
    }
    console.log(counter1);    
}

start1([1,2,3],[1,3]); 
start1([7,2,3],[1]);
start1([1,2],[]);
start1([3,2,4],[4,3,4]);


Write a function that accepts 2 arrays and consider the sum of the values in each array. Print the array which has the largest sum. In event of a tie, print "equal"
Sample Output:
biggerTwo([1, 2], [3, 4]); - >[3,4]
biggerTwo([5, 6], [3, 8]); - >equal
biggerTwo([1, 1], [1, 0]); - >[1,1]

function biggerTwo(arr1,arr2){
    var sumOfarr1 = 0;
    var sumOfarr2 = 0;
    for(var i =0; i < arr1.length; i++){
        sumOfarr1 += arr1[i];
    }
    for(var i =0; i < arr2.length; i++){
       sumOfarr2 += arr2[i];
   }
    if(sumOfarr1 > sumOfarr2){
        console.log(arr1);
    }else if(sumOfarr2 > sumOfarr1){
        console.log(arr2);
    }else{
        console.log("equal");
    }
    
}
biggerTwo([1, 2], [3, 4]);
biggerTwo([5, 6], [3, 8]);
biggerTwo([1, 1], [1, 0]); 

Write a function that accepts 2 arrays and prints a new array containing all their elements
Sample Output:
plusTwo([1, 2], [3, 4]); - >[1,2,3,4]
plusTwo([4, 4], [2, 2]); - >[4,4,2,2]
plusTwo([9, 2], [3, 4]); - >[9,2,3,4]

function plusTwo(arr1,arr2){
    var arr3=[];
    
    for(var i =0; i < arr1.length; i++){
        arr3.push(arr1[i]); 
    }
    
    for(var i =0; i < arr2.length; i++){
        arr3.push(arr2[i]); 
    }
    
    console.log(arr3);
}

plusTwo([1, 2], [3, 4]); //[1,2,3,4]
plusTwo([4, 4], [2, 2]); //[4,4,2,2]
plusTwo([9, 2], [3, 4]); //[9,2,3,4]

Write a function that accepts an array and swap the first and last element in the array. Print the modified array
Sample Output:
swapEnds([1, 2, 3, 4]) -> [4,2,3,1];
swapEnds([1, 2, 3]) -> [3,2,1]
swapEnds([8, 6, 7, 9, 5]) -> [5,6,7,9,8]

function swapEnds(arr1){
    var temp = arr1[0];
    arr1[0] = arr1[arr1.length-1];
    arr1[arr1.length-1] = temp;
    console.log(arr1);
}

swapEnds([1, 2, 3, 4])
swapEnds([1, 2, 3])
swapEnds([8, 6, 7, 9, 5]) 

Q-6
Write a function that accepts an array and prints the number of even numbers in the array.
 
Sample Output:
Sample Output:
countEvens([2, 1, 2, 3, 4]) ->3
countEvens([2, 2, 0]) ->3
countEvens([1, 3, 5]) ->0

function countEvens(arr1){
    var counter = 0;

    for(var i=0; i<arr1.length; i++){
        if(arr1[i] % 2 == 0){
            counter++;
        }
    }

    console.log(counter);
}

countEvens([2, 1, 2, 3, 4])
countEvens([2, 2, 0])
countEvens([1, 3, 5])

Question-7
Write a function that accepts an array and print the difference between the largest and smallest values in the array.
 
Sample Output:
bigDiff([10, 3, 5, 6]); → 7
bigDiff([7, 2, 10, 9]); → 8
bigDiff([2, 10, 7, 2]); → 8

function bigDiff(arr1){
    var diff = 0;
    var max = arr1[0];
    var min = arr1[0];
    
    for(var i = 0; i < arr1.length; i++){
        if(arr1[i] < min){
            min = arr1[i];
        }
    }
    
    for (var i = 0; i < arr1.length; i++){
        if (arr1[i] > max){
            max = arr1[i];
        }
    }
    
    diff = max - min;
    console.log(diff);
}

bigDiff([10, 3, 5, 6]); 
bigDiff([7, 2, 10, 9]);
bigDiff([2, 10, 7, 2]);


Question-8
Write a function that accepts an array and prints the sum of the numbers in the array. Except the number 13 is very unlucky,so it does not count and numbers that come immediately after a 13 also do not count
 
Sample Output:
sum13([1, 2, 2, 1]); ->6
sum13([1, 1]); ->2
sum13([1, 2, 2, 1, 13]); ->6
sum13([1, 2, 2, 1, 13,3]); ->6

function sum13(array){
    var arrSum = 0;
   for(var i =0; i < array.length; i++){
       if(array[i] == 13){
           break;
       } 
       
       arrSum += array[i];
    }
    
    console.log(arrSum);
}

sum13([1, 2, 2, 1]);
sum13([1, 1]); 
sum13([1, 2, 2, 1, 13]); 
sum13([1, 2, 2, 1, 13,3]); 

Question-9
Write a function that accepts an array and prints the total of the numbers in the array, except ignore sections of numbers starting with a 6 and extending to the next 7 (every 6 will be followed by at least one 7).
 
Sample Output:
sum67([1, 2, 2]); ->5
sum67([1, 2, 2, 6, 99, 99, 7]); ->5
sum67([1, 1, 6, 7, 2]); ->4
sum67([1, 1, 6, 2]); ->2
sum67([1, 2, 2, 6, 99, 99, 7,3,4]); ->12

function sum67(arr){
    var arrSum = 0;
    var idx;
        
    for(var i =0; i < arr.length; i++){ 

        if(arr[i] == 6){
            idx = arr.indexOf(7,i);
            
            if(idx == -1 || idx == arr.length - 1){
                break;
            } else {
                i = idx + 1;
            }
        }
        
        arrSum += arr[i];    
    }
    
    console.log(arrSum);
}

sum67([1, 2, 2]);
sum67([1, 2, 2, 6, 99, 99, 7]); 
sum67([1, 1, 6, 7, 2]); 
sum67([1, 1, 6, 2]); 
sum67([1, 2, 2, 6, 99, 99, 7,3,4]); 

Write a function that accepts an array and prints true if the array contains a 2 next to a 2 somewhere.
 
Sample Output:
has22([1, 2, 2]); ->true
has22([1, 2, 1, 2]); ->false
has22([2, 1, 2]); ->false
has22([2,2, 1, 2]); ->true

function has22(arr){
    is22 = false;
    
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == 2 &&  arr[i+1] == 2){
            is22 = true;
        }
    }
    
    if(is22){
        console.log("true");
    }else{
        console.log("false");
    }
}

has22([1, 2, 2]);
has22([1, 2, 1, 2]);
has22([2, 1, 2]);
has22([2,2, 1, 2]);