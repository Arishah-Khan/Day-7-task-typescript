// Day 7

// Question no 19

// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.

let guestList:string[] = ["Kiran","Ajwa","Tasmiya","Zimal","Laiba"];

console.log(guestList.length , "people are invited to dinner.");




// Question no 20

// 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
// else you’d like. Write a program that creates a list containing these items.
let rivers : string[] = ["Indus River","Jhelum River","Chenab River","Ravi River","Sutlej River"];

console.log("List Of Rivers:");

rivers.map((items) => console.log(items));


// Question no 21

// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


let student : {name : string, fName :  string, age : number,   rollNo : number} = 
{ 
   name : "Minahil",
    fName: "Arif", 
    age : 14,
   rollNo : 7891}

console.log(`Student info: ${student.name}, ${student.age}  years old, and the daughter of ${student.fName}, and her the roll number is ${student.rollNo}`);