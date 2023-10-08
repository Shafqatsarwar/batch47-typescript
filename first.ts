"use strict";
var firstName=["The","Lion","Azlan","Mouta"];
var lastName=["king","khan","thousa"]
var fullName=[];
for(var i=0; i<firstName.length; i++){
    for(var j=0; j<lastName.length;j){
        fullName.push(firstName[i]+lastName[j]);
    }
}
console.log(fullName);
