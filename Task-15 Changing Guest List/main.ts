let Guest_list: string[] = ["Rajesh", "Kapil", "Abdullah"];

for (let i=0; i < Guest_list.length; i++){
    console.log(`Dear ${Guest_list[i]} :\n you are invited to dinner! \n `); 
}
 console.log(`"Unfortunately ${Guest_list[2]}, cant come to dinner."`);

 Guest_list[2] = "Aamir Ali"
console.log("\n New Invitation List: \n");

for (let k=0; k < Guest_list.length; k++){
    console.log(`Dear ${Guest_list[k]} :\n you are invited to dinner! \n `); 

}
 