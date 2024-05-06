"use strict";
let magician = ["Harry Poter", "Derren Brown", "Dynamo.", "Shin Lim"];
function copy_arry(arr) {
    return [...arr];
}
function make_great(magicianArry) {
    for (let i = 0; i < magicianArry.length; i++) {
        magicianArry[i] = "The Great " + magicianArry[i];
    }
}
function show_magician(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copyMagicainArry = copy_arry(magician);
make_great(copyMagicainArry);
console.log("\n\nThis is my original Array");
show_magician(magician);
console.log("\n\nThis is my modified copy of the Array");
show_magician(copyMagicainArry);
