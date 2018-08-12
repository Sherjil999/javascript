/*var foodType;
foodType = prompt("Enter your favorite food");

switch(foodType) {
    case "Turkish":
        console.log("You like fast Kebab");
        break;
    case "Italian":
        console.log("You like Pizza");
        break;
    default:
        console.log("You like Roti Salan");
        break;
}

var laptop_Model;

laptop_Model = prompt("Enter your laptop model?");

switch(laptop_Model) {
    case "Apple":
        console.log("Apple-no virus");
        break;
    case "Dell":
        console.log("Tough one");
        break;
    case "Acer":
        console.log("Cheap one");
        break;
    default:
        console.log("do not buy that one");
        break;
}

var num = parseInt(prompt("Enter your number"));

switch(num) {
    case 1:
    case 2:
    case 3:    
        console.log("ok");
        break;
    case 4:
        console.log("not ok");
        break;
    default:
        console.log("enter something else");
        break;
        
}


var dayOfWeek;
dayOfWeek = parseInt(prompt("Enter a number between 1 and 7 for day"));

switch(dayOfWeek) {
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;   
    default:
        console.log("Please enter a valid number");
}
*/
var actual_name, expected_name = "abc";

actual_name = prompt("Please enter your name");

if(actual_name !== "") {
    if(actual_name === expected_name){
    console.log("Correct name");
    } else {
    console.log("Incorrect name");
}

} else{
    console.log("Name can not be empty");
}


