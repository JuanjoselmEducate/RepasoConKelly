'use strict';
//For clásico
const myArray = [2,3,4,5,6,7,8,9,10];
let otherArray = new Array('a','e','i','o','u');
for(let i=0; i < myArray.length; i++){
    console.log("Elemento en posición", i, ":", myArray[i]);
}
for(let i in otherArray){
    console.log("Elemento en posición", i, ":", otherArray[i]);

}
for(let i of myArray){
    console.log("Elemento:", i);

}