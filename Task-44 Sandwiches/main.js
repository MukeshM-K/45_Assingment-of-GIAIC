"use strict";
function make_sandwich(item) {
    console.log("\nMaking Your Sandwich with:");
    item.forEach(element => console.log("- " + element));
    console.log("Enjoy your sandwich !\n");
}
make_sandwich(["Ham", "Cheese", "lettuce"]);
make_sandwich(["Turkey", "Cheese"]);
make_sandwich(["Peanut Butter", "lettuce"]);
