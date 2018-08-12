/*
function stringTimes(string,number){
    var str = "";
    for(var i=1; i<=number; i++){
        str += string;    
    }
    console.log(str);
}

function love6(num1,num2){
    if(num1 == 6 || num2 == 6 || num1 + num2 == 6 || num1 - num2 == 6 || num2 - num1 == 6){
        console.log("true");
    } else {
        console.log("false");
    }
}

function specialEleven(num){
    if(num % 11 == 0 || num % 11 == 1){
        console.log("true");
    } else {
        console.log("false");
    }
}

function dateFashion(yourStyle, dateStyle){
    var result = 0;
    
    if(yourStyle >=8 || dateStyle >=8){
        result = 2;    
    } else if(yourStyle <= 2 || dateStyle <= 2){
        result = 0;
    } else {
        result = 1
    }
    console.log(result);
}

function arrayCount9(arr){
    var counter9 = 0;
    
    for(var i=0; i<arr.length; i++){
        if(arr[i] == 9){
            counter9++;
        }
    }
    console.log(counter9);
}

function cigarParty(cigarNum, isWeekend){
    if(!isWeekend){
        if(cigarNum>=40 && cigarNum<=60){
            console.log("true");
        } else {
            console.log("false");    
        }   
    } else if(cigarNum>=40){
        console.log("true");
    } else {
        console.log("false");
    }
}

function doubleX(arr){
    var foundX =  false;
    var foundDoubleX = false;
    
    for(var i=0; i<arr.length; i++){
        if(arr[i] == "x"){
            foundX = true;
            
            if(arr[i+1] == "x"){
                foundDoubleX = true
            }
        } 
    }
    
    if(foundX){
        if(foundDoubleX){
            console.log("true");
        } else {
            console.log("false");
        }    
    } else {
        console.log("not found");
    }
}

function deerPlay(temp,isSummer){
    if(isSummer){
       if(temp >= 60 && temp <= 100){
           console.log("true");
       } else {
           console.log("false");
       }
    } else if(temp >= 60 && temp <= 90){
        console.log("true");
    }else {
        console.log("false");
    }
}

deerPlay(70, false)
deerPlay(95, false)
deerPlay(95, true)

function caughtSpeeding(speed, isBirthday){
    var result;
    
    if(isBirthday){
        speed = speed - 5;
    }
    
    if(speed <= 60){
        result = 0;
    }else if(speed >= 61 && speed <= 80){
        result = 1;
    }else {
        result = 2;
    }
    console.log(result);
}

caughtSpeeding(65, true);

*/

function alarmClock(indexOfDay, isVacation){
    if(isVacation){
       if(indexOfDay > 0 && indexOfDay < 6){
           console.log("10:00");
       } else if(indexOfDay == 0 || indexOfDay == 6) {
           console.log("Off");
       }     
    } else if(indexOfDay > 0 && indexOfDay < 6){
        console.log("7:00");   
    } else if(indexOfDay == 0 || indexOfDay == 6) {
           console.log("10:00");
    }     
}

alarmClock(1, false); //"7:00"
alarmClock(5, false); //"7:00"
alarmClock(0, false); //"10:00"
alarmClock(2,true); //"10:00"
alarmClock(6,true); //off