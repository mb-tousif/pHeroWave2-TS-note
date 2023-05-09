// Write a TypeScript function that takes in two arrays of numbers as parameters. The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.

// Answer:

const compareArrays = (arr1: number[], arr2: number[]): number[] => {
    const result = arr1.filter((num) => arr2.includes(num));
    return result;
}

console.log(compareArrays([1, 2, 3, 4, 5], [2, 4, 6, 8, 10])); // [2, 4]

// // You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.

// // Write a TypeScript function that takes in an array of Products and a criterion string as parameters. The function should return a new array containing only the Products that match the provided criterion.
  
