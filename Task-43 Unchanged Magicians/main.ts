let magician:string[] = ["Harry Poter", "Derren Brown", "Dynamo.", "Shin Lim"]

function copy_arry(arr:string[]){ 
 return [...arr];
}


function make_great(magicianArry:string[]){
 for(let i = 0; i<magicianArry.length; i++){
    
    magicianArry[i]= "The Great " + magicianArry[i]
 }
}


function show_magician(magicians:string[]){
    magicians.forEach(element => {
        console.log(element);
        
    });
}

 const copyMagicainArry = copy_arry(magician)
make_great(copyMagicainArry);

console.log("\n\nThis is my original Array");

show_magician(magician)

console.log("\n\nThis is my modified copy of the Array");

show_magician(copyMagicainArry)