"use strict";
let age = 3;
if (age < 2) {
    console.log("The Person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The Person is a toddier. ");
}
else if (age >= 4 && age < 13) {
    console.log("The Person is a Kid. ");
}
else if (age >= 13 && age < 20) {
    console.log("The Person is a Teenager. ");
}
else if (age >= 20 && age < 65) {
    console.log("The Person is an Adult. ");
}
else {
    console.log("The Person is an elder.");
}
