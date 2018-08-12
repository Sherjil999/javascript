var options, itemToAdd, itemToRemove, itemToEdit, removed, edited;
var shoppingList = ["Orange","Apple"];

do {
    options = parseInt(prompt("1-Add a new product\n2-Remove a product\n3-Edit a product\n4-Print the shopping list\n5-Exit the program"));
    
    if(options === 1){
        itemToAdd = prompt("Currently you have: " + shoppingList + "\nWhat do you want to add?");
        
        shoppingList.push(itemToAdd);
        alert("Currently you have: " + shoppingList);
    } else if(options === 2){
        itemToRemove = prompt("Currently you have: " + shoppingList + "\nWhat do you want to remove?");
        
        removed = false;
        
        for(var i=0; i<shoppingList.length; i++){
            if(itemToRemove == shoppingList[i]){
                removed = true;
                shoppingList.splice(i,1);
            }
        }

        if(removed){
            alert(itemToRemove + " successfully removed\n" + shoppingList);
        } else {
            alert(itemToRemove + " could not be found");
        }
        
    } else if(options === 3){
            itemToEdit = prompt("Currently you have: " + shoppingList + "\nEnter what do you want to change?");
            itemToAdd = prompt("What is the new product that you want to enter?");
            
            edited = false;

        for(var i=0; i<shoppingList.length; i++){
            
            if(itemToEdit == shoppingList[i]){
                shoppingList.splice(i,1,itemToAdd);
                edited = true;
            }
        }

        if(edited){
            alert(itemToEdit + " successfully changed\n" + shoppingList);
        } else {
            alert(itemToEdit + " could not be found");
        }
        
    } else if(options == 4){
        
        for(var i=0; i<shoppingList.length; i++){
            alert((i+1)+ "-" + shoppingList[i]);
        }
    }
    
} while(options !=5);

alert("Thank you");