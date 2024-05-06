let magician:string[] = ["Harry Poter", "Derren Brown", "Dynamo.", "Shin Lim"]


function make_great(magicianArry:string[]){
 for(let i = 0; i<magicianArry.length; i++){
    
   magician[i]= "The Great " + magicianArry[i]
 }
}


function show_magician(magicians:string[]){
    magicians.forEach(element => {
        console.log(element);
        
    });
}
make_great(magician);
show_magician(magician)