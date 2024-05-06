let current_user : string[] = ["MuKesh", "RaJesh", "JaI", "KapIL", "AbdulLah"]
let new_user : string[] = ["Aamir", "RaJesh", "Parkash", "KapIL", "Vinod"]

new_user.forEach(newUsername => {
    let lowercase: string = newUsername.toLowerCase();

    if(current_user.map(c_user => c_user.toLowerCase()).includes(lowercase)){
        console.log(`The username ${newUsername} is not available. Please write a different username`);
        
    } else{
        console.log(`The username ${newUsername} is available.`);
        
    }
})