"use strict";
let current_user = ["MuKesh", "RaJesh", "JaI", "KapIL", "AbdulLah"];
let new_user = ["Aamir", "RaJesh", "Parkash", "KapIL", "Vinod"];
new_user.forEach(newUsername => {
    let lowercase = newUsername.toLowerCase();
    if (current_user.map(c_user => c_user.toLowerCase()).includes(lowercase)) {
        console.log(`The username ${newUsername} is not available. Please write a different username`);
    }
    else {
        console.log(`The username ${newUsername} is available.`);
    }
});
