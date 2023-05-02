# TypeScript Documentation

``
    Prerequisites: Javascript
``

## 1. Introduction

### 1.1 What is TypeScript?

<p>TypeScript is a free and open-source programming language developed and maintained by Microsoft. It is a superset of JavaScript (which means that any valid JavaScript code is also valid TypeScript code) that adds optional static typing, classes, interfaces, and other advanced features to the language. It is designed to make large-scale application development easier, more efficient, and less error-prone by catching errors at compile-time and enabling developers to write more modular and reusable code.</p>

### Example:

```
// index.js
// without typescript

function addNumbers(a, b) {
  console.log(a + b);
}

addNumbers(20, 30);
addNumbers(20, "30");

// with typescript
function addNumbers(a: number, b: number) {
  console.log(a + b);
}

// without typescript
addNumbers(20, 30); // no error

// with typescript
addNumbers(20, "30"); // error

```

## 2. Environment setup

### 2.1 Install and use typescript

- Text Editor: VS Code
- Install node & typescript

```js
     local installation: npm install typescript --save-dev
     Or
     global installation: npm install -g typescript
```

- check various versions:

  ```js
    node --version
    npm --version
    tsc --version
  ```

### 2.2 How does it work?

- index.ts -> tsc index.ts -> index.js

## 3. First typescript program

### 3.1 Example

- typescript file extension is .ts
- Run the following program using `tsc index.ts` command and then `node index.js`

  ```js
  // index.ts

  // without ts
  function addNumbers(a, b) {
    console.log(a + b);
  }

  addNumbers(20, 30);
  addNumbers(20, "30");

  // correct one using ts
  function addNumbers(a: number, b:number) {
    console.log(a + b);
  }

  addNumbers(20, 30);
  addNumbers(20, "30");


  let a = 20;
  console.log(a);

  let name: string = "Musab Bin Tousif";
  name. //intellisense support will be here
  ```
## 4 Data Types in Typescript

### 4.1 Built in types: number, string, boolean, void, null, undefined etc.
  * Void is a type that represents the absence of a value. It indicates that a function does not return anything or that a variable has no value assigned to it.
  #### Example:
  ```
    function logMessage(message: string): void {
      console.log(message);
    }
  ```
  <p>In this case, the void type is used to indicate that the function does not return a value.</p>
  <p>Similarly, a variable of type void can be declared, but it can only be assigned the value of undefined or null. </p>

  #### Example:
  ``
    let myVoid: void = undefined;
  ``
  <p>Note that it is not possible to declare a variable of type void and assign it any other value, as this type represents the absence of a value. </p>

### 4.2 User-defined types: Arrays, Tuples, Enums, Classes, interfaces etc.
  * Array is a collection of elements of a specific data type. It is a data structure that can store multiple values of the same data type and provides methods to access and manipulate those values.
  <p>To define an array in TypeScript, you can use square brackets <b>[]</b> after the data type of the elements or <b>Array</b> keyword to create an array.</p>

   #### Example:
  ```
    let myArray: string[] = ['🍅', '🥦', '🥒', '🌽', '🥕', '🥑', '🍍', '🍌', '🍉'];

    let myArray: Array<string> = ['🍅', '🥦', '🥒', '🌽', '🥕', '🥑', '🍍', '🍌', '🍉'];
  ```

  * Tuple is a type that represents a fixed-length array where each element has a specific data type. Tuples are similar to arrays, but with a fixed number of elements, and each element can have a different data type.
  <p>To define a tuple in TypeScript, you use the same square bracket notation as an array, but with the types of each element specified in order, separated by commas.</p>

  #### Example:
  ```
    let myTuple: [string, number, boolean] = ['🍉', 17, true];
  ```

  <p>To access the elements of a tuple, you use index notation, just like with an array. </p>

  #### Example:
  ```
    let myTuple: [string, number, boolean] = ['🍉', 17, true];
    console.log(myTuple[0]); // '🍉'
    console.log(myTuple[1]); // 17
    console.log(myTuple[2]); // true
  ```

  <p>You can also use destructuring to extract the elements of a tuple into separate variables. Note that the number of variables in the destructuring assignment must match the number of elements in the tuple.</p>
  
### 4.3 Super type: Any, Unknown
### 4.4 For avoiding typescript in entire file:
    `// @ts-nocheck`