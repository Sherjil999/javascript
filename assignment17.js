var strVar = "In order to Become a Number 1 Test Automation Developer, i need to practice at least 2 to 3 hours a day. Today is 08/11/2018. Weather is 70 F degrees."

//1) Display how many sentences in the string.

//var arr = strVar.split('.');
//var numSentences = arr.length - 1;
//console.log(arr);
//console.log("There are " + numSentences + " sentences in the string.");

//2) Display how many words in the string.

//var arr = strVar.split(' ');
//var numWords = arr.length;
//console.log("There are " + numWords + " words in the string.");

//3) Display todays date.

//var idx = strVar.indexOf('08/11/2018');
//var todaysDate = strVar.substr(idx,10);
//console.log(todaysDate);

//4) Pick today's weather from the string and convert to Celsius and display the result.

//var idx = strVar.indexOf('70');
//
//var tempFar = parseInt(strVar.substr(idx,2));
//var tempCel = Math.round((tempFar -32) * 5/9);
//console.log(tempCel + "C");

//5) Separate Numbers and non numerical characters to 2 separate variables and display the result.
//
//         Please use isNaN() = is not a number method to check if it is a number or not.
//         console.log(isNaN(1));  -- >false 
//         console.log(isNaN("apple")); -- >true
//
//        Output Should Be:
//            InordertoBecomeaNumberTestAutomationDeveloper,ineedtopracticeatleasttohoursaday.Todayis//.WeatherisFdegrees.
//           1230811201870

//var numbers = "", chars = "";
//
//for(var i=0; i<strVar.length; i++){
//    
//    if(strVar.charAt(i) != " "){
//        
//        if(isNaN(strVar.charAt(i))){
//            chars += strVar.charAt(i);
//        } else {
//            numbers += strVar.charAt(i);
//        }
//        
//    }
//    
//}
//
//console.log(chars + "\n" + numbers);

//6) in the String instead of '2 to 3 hours' , display '3 to 4 hours'.

//var newStr = strVar.replace("2 to 3", "3 to 4");
//console.log(newStr);

//7) Display first sentence in Uppercase and other sentences in Lowercase.

//var idx = strVar.indexOf('.');
//var firstSentence = strVar.substring(0, idx + 1);
//var remainingStr = strVar.substr(idx + 1);
//var fullStr = firstSentence.toUpperCase() + remainingStr;
//console.log(fullStr);

//8) Remove all spaces from the string and display the result.

//var arr = strVar.split(' ');
//var newStr = arr.join('');
//console.log(newStr);

//var newStr = "";
//
//for(var i = 0; i < strVar.length; i++){
//    if(strVar.charAt(i) !== " "){
//        newStr += strVar.charAt(i);    
//    }
//}
//
//console.log(newStr);

//9) Reverse all words order in the string and replace all "." and "," with ""
//
//      Output Should Be:
//      degrees F 70 is Weather 08/11/2018 is Today day a hours 3 to 2 least at practice to need i Developer Automation Test 1 Number a Become to order In

var newStr = "";
var arr = strVar.split(' ');


for(var i = arr.length - 1; i >= 0; i--){

    if(arr[i].endsWith(",")){
        arr[i] = arr[i].replace("," , "");    
    } else if(arr[i].endsWith(".")){
        arr[i] = arr[i].replace(".", "");    
    }

    newStr += arr[i] + " ";    
}

console.log(newStr);











