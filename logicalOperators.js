/*
//Logical AND
console.log(true && true);
console.log(true && false);
console.log(true && (3==4));

//Logical OR
console.log(true || true);
console.log(false || true);
console.log(false || (3==4));

var ApplesCount = 20;
var OrangesCount = 30;
var PearsCount = 30;

var comp = ApplesCount < OrangesCount || OrangesCount >= PearsCount;

console.log(comp);

var OutsideWeather = "Shinny";
var Degree = 70;
var comp2 =(!(OutsideWeather == "Rainning" || Degree == 70));
console.log(comp2);

var b = 2;
var res = ++b == 2 || --b == 2 && --b == 2;
console.log(res);
 */

var x=true, z=true;
var y=20;

x = (y!=10) || (z=false);
console.log(x);
