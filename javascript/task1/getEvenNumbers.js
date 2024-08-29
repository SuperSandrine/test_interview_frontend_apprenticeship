//* Write a function named `getEvenNumbers` that takes an array of numbers as input and returns a new array containing only the even numbers from the original array.

const getEvenNumbers = (numbers) => numbers.filter(num=>num %2===0);

export default getEvenNumbers