/*
for(var i=0; i<5; i++) {
    console.log("Outer Loop at state: " + i + "\n");
    for(var p=0; p<2; p++) {
        conosole.log("Inner Loop at state: " + p);
        if(p==1) {
            console.log("\n");
        }
    }
}

for(var i=1; i<=5; i++) {
    for(var j=1; j<=i; j++) {
        console.log("*");
    }
    console.log("\n")
}
*/

for(var i=1; i<=5; i++){
    for(var z=1; z<=i; z++){
        console.log("*");
    }
    console.log("\n");
}