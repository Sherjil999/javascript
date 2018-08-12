
//var count=1;
//while(count<1){
//    console.log("Count is: " + count + "from while loop");
//    count++;
//}
//

//var count=1;
//
//do{
//    console.log("Count is: "  + count +  + "from do-while loop");
//    count++;
//    
//}while(count<11)

//Logic to print hello 10 times on the console.

//var x=0;
//while(x<10){
//    console.log("Hello" + x);
//    x++;
//}

//var z=1;
//while(++z<10){
//    console.log("Hello" + z);
//    z--;
//}

/*
Initialize a variable with value 25
Write a loop that will popup “in the loop” while variable is more than 10
*/


//var number=25;
//
//while(number>10){
//    console.log("In the loop");
//    number=number-1;
//}


/*
Write a program using while loop, that calculates the sum of the even numbers between 0 and 100
*/

var number=0;
var total1=0,total2=0;

while(number<=100){
    if(number%2==0){
        total1=total1+number;
    }else{
        total2=total2+number;
    }
    number++;
    
}
console.log("Even numbers' total : " + total1);
console.log("Odd numbers' total : " +total2);











    
    
    
    
    



