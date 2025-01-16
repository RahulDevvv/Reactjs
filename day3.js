// function calculateDiscount(price, discount = 10) {
//     if (price < 0 || discount < 0) {
//         throw new Error("Price and discount must be non-negative values.");
//     }   
//     const finalPrice = price - (price * (discount / 100));
//     return finalPrice;
// }
// console.log(calculateDiscount(100)); 
// console.log(calculateDiscount(200, 15)); 


// function mergeArrays(array1, array2) {
//     return [...array1, ...array2];
// }
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const mergedArray = mergeArrays(array1, array2);
// console.log(mergedArray);


// function logArguments(...args) {
//     console.log(args);
// }
// logArguments(1, 2, 3);         
// logArguments("a", "b", "c");   
// logArguments();                


// function createMessage(defaultMessage, ...names) {
//     return names.map(name => `${defaultMessage}, ${name}!`);
// }
// const messages = createMessage("Hello", "Alice", "Bob", "Charlie");
// console.log(messages); 


// function sum(a, b, c) {
//     return a + b + c;
// }
// const numbers = [5, 10, 15];
// const total = sum(...numbers);
// console.log(total);


function createUserProfile(username, age = 25, country = "Unknown") {
    return {
        username,
        age,
        country
    };
}
const profile1 = createUserProfile("Alice");
console.log(profile1);
const profile2 = createUserProfile("Bob", 30, "India");
console.log(profile2);



