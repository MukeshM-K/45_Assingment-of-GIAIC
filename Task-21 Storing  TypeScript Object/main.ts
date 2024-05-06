interface type {
    Name: string, Age: Number, Profession: string
}

let OBJ:type = {
Name: "Mukesh",
Age: 19,
Profession: "Student"
};

console.log( '\n Object Containing About Me : \n');
console.log(`My Name is ${OBJ.Name}`);
console.log(`I am ${OBJ.Age} Years Old`);
console.log(`I am a ${OBJ.Profession}`);
