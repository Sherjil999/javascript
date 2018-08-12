Q.1

var numbers = [];
var result = "";
for(var i=0; i<1000; i++){
    numbers.push(i+1);
    result += numbers[i] + " ";
    if(numbers[i]%10==0){
        result += "\n";
    }
}
console.log(result);


Q.2

var numArray = new Array(1,2,3,4,5,6,7,8,9,10);

for(var i=0; i<numArray.length; i++){
    numArray[i] *= 19;
}

for(var i=0; i<numArray.length; i++){
    console.log(numArray[i]);
}

Q.3

var arr = ['A', 'Z', 'B', 'N', 'P', 'T', 'X', 'C'];
var character = prompt("Enter a character to search");
var found = false;

for(var i=0; i<arr.length; i++){
    if(arr[i] == character){
        found = true;
        break;
    }
}

if(found){
    console.log(character + " found!");
} else {
    console.log(character + " not found!");
}


Q.4

var scores = [51, 85, 32, 0, 98, 157, 82, 101, 64, 249];
var half_centuries = 0, centuries = 0, double_centuries = 0;

for(var i=0; i<scores.length; i++){
    if(scores[i] >= 50 && scores[i] < 100){
        half_centuries++;    
    } else if(scores[i] >= 100 && scores[i] < 200){
        centuries++;
    } else if(scores[i] >= 200 && scores[i] < 300){
        double_centuries++;
    }
}

console.log("Batsman scored " + half_centuries + " half-centuries, " + centuries + " centuries and " + double_centuries + " double-centuries." );


Q.5

var arr = [];
arr[0]= 0;
arr[1]= 1;
var n = parseInt(prompt("How many numbers you want in the Fibonacci series? "));

for(var i=2; i<n; i++){
    arr[i] = arr[i-1] + arr[i-2];
}

for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
}







