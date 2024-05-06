let Guest_list: string[] = ["Rajesh", "Kapil", "Abdullah"];

console.log("\n New Invitation List: \n");

for (let k=0; k < Guest_list.length; k++){
    console.log(`Dear ${Guest_list[k]} :\n you are invited to dinner! \n `); 

}

console.log("Good News: We have found a bigger dinner table, so more space available. So our new guests are : \n");

Guest_list.unshift("Jai");
Guest_list.splice(2, 0, "Kirshan")
Guest_list.push("Sunil")

for (let i=0; i < Guest_list.length; i++){
    console.log(`Dear ${Guest_list[i]} :\n you are invited to dinner! \n `); 

}

console.log("Unfortunately, the new dinner table wont arrive in time, so we can only invite two people for dinner. \n ");


while(Guest_list.length>2){
let notInvited = Guest_list.pop()
console.log(`Sorry, Due to limited space we cant invited you to dinner Mr. ${notInvited} \n`);

}


for (let k=0; k < Guest_list.length; k++){
    console.log(`Dear ${Guest_list[k]} :\n You are still invited to dinner! \n `); 

}


Guest_list.pop()
Guest_list.pop()

console.log(`Guest List is Empty Now ${Guest_list}`);
