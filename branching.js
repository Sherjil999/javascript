
/*
var i = 0;
while( i < 6) {
    if(i == 3) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}

var sum = 0;

do {
    var number = parseInt(prompt("Enter a number, (-1 to exit)"));
    if(number === -1) {
        break;
    }
    //if (number<0){
      //continue;
    //}
    sum += number;
} while(number !== -1)
    
console.log(sum);



var sum = 0;

do {
    var number = parseInt(prompt("Enter 5 numbers"));
    sum += number;
    if (number<=0){
    continue;
    //}
    sum += number;
} while(number !== -1)
    
console.log(sum);
}

var sum = 0, number;

for(var i=0; i<5; i++) {
    number = parseInt(prompt("Enter 5 numbers"));
    
    if (number<=0){
        continue;
    }
    
    sum += number;
}

console.log(sum);

var number = 1, sum = 0;

while(++number <= 10) {
    if(number % 2 == 0) {
        continue;
    }
    sum += number;
}

console.log(sum);



var i = 0;                                         
outer:
do {
    i=8;
    inner:
    while(true){
        console.log(i--);
        if(i==4){
            break outer;
        }
    }
    
} while(true);

loop1:
for(var i=0; i<3; i++) {
    loop2:
    for(var j=0; j<3; j++) {
        if(i==1 && j==1) {
            continue loop1;
        }
        console.log("i= " + i + " ,j= " + j);
    }
}

var counter = 0; 

for(var i=1; i<=50; i++) {
   if(i%3==0 && i%5==0) {
       counter++;
   }
}
console.log(counter + " numbers between 1 and 50 are divisible by 3 and 5");

var number;
var sum = 0;


do{
    number = parseInt(prompt("enter a number"));
    if(number%2==0){
    sum = sum + number;
    }else {
        sum = sum - number;
    }
} while(number !== 0);
console.log(sum);
*/





    

