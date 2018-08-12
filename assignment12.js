//Question 1:
//Write a javascript program to create an array of 8 * 8 size and initialize all the array elements starting from 1 till 64 (using for loop) as follows:
//1 2 3 4 5 6 7 8
//9 10 11 12 13 14 15 16
//17 18 19 20 21 22 23 24
//25 26 27 28 29 30 31 32
//33 34 35 36 37 38 39 40
//41 42 43 44 45 46 47 48
//49 50 51 52 53 54 55 56
//57 58 59 60 61 62 63 64
//
//Write a nested for loop to print all the elements of 2-Dimensional array in above format.
//
//
//Question 2:
//Write a javascript program to create following 2-Dimensional array of 8 * 8 size [to resemble chess board] using Data instantiation:
//
//W B W B W B W B
//B W B W B W B W
//W B W B W B W B
//B W B W B W B W
//W B W B W B W B
//B W B W B W B W
//W B W B W B W B
//B W B W B W B W
//
//Write a nested for loop to print all the elements of 2-Dimensional array in above format.
//
//
//Question 3:
//
//var numbers = [
//[90, 10, 231],
//[-20, 80, 100, 23, 54],
//[45, 22],
//[87, 98, -100, 49, 73, 35, 19]
//];
//
//
//Write logic to find out highest number in above array.
//
-

var numbers = [
    [90, 10, 231],
    [-20, 80, 100, 23, 54],
    [45, 22],
    [87, 98, -100, 49, 73, 35, 19]
];

var max = numbers[0][0];

for(var i=0; i< numbers.length; i++){
    for(var j=0; j<numbers[i].length; j++){
        if(numbers[i][j] > max){
            max = numbers[i][j];
        }
    }
}

console.log(max);


