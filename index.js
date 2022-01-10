// create empty array
let emptyArray = [];
// create hobbies array and add 5 hobbies
let hobbies = ["hobbies_1", "hobbies_2", "hobbies_3", "hobbies_4", "hobbies_5", "hobbies_6"];
// create numbers array and add 5 fiv numbers 
let numbers = [1,10,100,1000,1000000];
console.log(`Hobbies Array: [${hobbies}]
Numbers Array: [${numbers}]

===================
`);



// print out the second number of the numbers array 
console.log(`1- The second number of the numbers array: [${numbers[1]}].`);
// Print out the last hobby from the array hobbies
console.log(`2- The last hobby from the array hobbies: [${hobbies[hobbies.length-1]}].`);
// Add a fake hobby to the end of the array hobbies
console.log("3- Add a fake hobby to the end of the array hobbies: [DONE ✅]");
hobbies.push("fakeHobbie");
// Print the last hobby
console.log(`4- The last hobby: [${hobbies[hobbies.length-1]}].`);
// Print the length of array hobbies
console.log(`5- The length of array hobbies: [${hobbies.length}]`);
// Remove the last 2 hobbies from array hobbies
console.log("6- Remove the last 2 hobbies from array hobbies: [DONE ✅] ");
// hobbies = hobbies.slice(0,-2);
hobbies.splice(hobbies.length-2,2);
// Print length of hobbies
console.log(`7- The length of array hobbies: [${hobbies.length}]`);
// Print every element in hobbies in a single line
console.log(`8- Every element in hobbies in a single line: [${hobbies}]`);
// Empty the array hobbies
console.log("9- Empty the array hobbies: [DONE ✅]")
hobbies = [];
console.log(`10- The array hobbies is empty: ${hobbies}

===================
`);